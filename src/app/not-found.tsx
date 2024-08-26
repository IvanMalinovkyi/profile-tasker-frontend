import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-grow items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">
          Сторінку не знайдено
        </h1>
        <p className="mt-4 text-gray-600">
          Вибачте,сторінку яку ви шукаєте не існує.
        </p>
        <Link
          className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          href="/">
          На головну
        </Link>
      </div>
    </div>
  );
}
