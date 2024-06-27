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
          className="border-black border-1 border-solid p-3 "
        />
        <button className="border-black border-1 border-solid rounded p-2">
          Search Movie
        </button>
      </form>
    </Container>
  );
};
