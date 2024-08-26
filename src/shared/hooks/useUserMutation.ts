import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "../services/user.service";
import { authService } from "../services/auth.service";
import { IUser } from "../types/auth.types";
import { toast } from "sonner";
import { UseFormReset } from "react-hook-form";
import { useEffect } from "react";

export function useGetUserProfile() {
  const {
    data: user,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => userService.getUser(),
    retry: false,
  });

  return { user, isLoading, isSuccess };
}

export function useLogoutUser() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { mutate, isPending, isSuccess };
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["update profile"],
    mutationFn: (data: IUser) => userService.updateUser(data),
    onSuccess() {
      toast.success("Данні успішно оновлено");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { mutate, isPending };
}

export function useUserLoadInitialData(reset: UseFormReset<IUser>) {
  const { user, isSuccess } = useGetUserProfile();

  const initialData = {
    email: user?.email,
    name: user?.name,
    role: user?.role,
  };

  useEffect(() => {
    if (isSuccess && user) {
      reset(initialData);
    }
  }, [isSuccess]);
}
