import { UseFormReset } from "react-hook-form";
import { IAuthForm } from "../types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { toast } from "sonner";
import { PAGES } from "../config/routes";
import { useRouter } from "next/navigation";

export const useAuthMutation = (
  isLoginForm: boolean,
  reset: UseFormReset<IAuthForm>
) => {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) =>
      authService.main(isLoginForm ? "login" : "register", data),
    onSuccess() {
      toast.success("Вхід виконано успішно");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      reset();
      push(PAGES.HOME);
    },
    onError(error: any) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Помилка");
      }
    },
  });

  return { mutate };
};
