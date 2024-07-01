import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Container } from "../Container/Container";

export const MoviesSearch = ({ onSearchMovie }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (!data.query.trim()) {
      toast.error("error");
      return;
    }

    onSearchMovie(data);
    reset();
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-5 justify-center items-center p-8"
      >
        <input
          type="search"
          {...register("query")}
          placeholder="Search..."
          className="shadow-[0px_0px_2px_2px] rounded-lg p-2"
        />
        <button className="shadow-[0px_0px_2px_2px] rounded-lg p-2 hover:bg-red-400">
          Search Movie
        </button>
      </form>
    </Container>
  );
};
