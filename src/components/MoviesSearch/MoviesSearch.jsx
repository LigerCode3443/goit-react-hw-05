import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="search" {...register("query")} placeholder="Search..." />
        <button>Search Movie</button>
      </form>
    </div>
  );
};
