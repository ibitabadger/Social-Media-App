
// import { useContext } from "react";
// import "./stories.scss";
// import { AuthContext } from "../../context/authContext";
// import { useQuery } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";

// const Stories = () => {
//   const { currentUser } = useContext(AuthContext);


//   const { isLoading, error, data } = useQuery(["stories"], () =>
//     makeRequest.get("/stories?postId=" + postId).then((res) => {
//       return res.data;
//     })
//   );

//   // const queryClient = useQueryClient();

//   // const mutation = useMutation(
//   //   (newComment) => {
//   //     return makeRequest.post("/stories", newComment);
//   //   },
//   //   {
//   //     onSuccess: () => {
//   //       // Invalidate and refetch
//   //       queryClient.invalidateQueries(["stories"]);
//   //     },
//   //   }
//   // );

//   // const handleClick = async (e) => {
//   //   e.preventDefault();
//   //   mutation.mutate({ desc, postId });
//   //   setDesc("");
//   // };
//   //TODO Add story using react-query mutations and use upload function.

//   return (
//     <div className="stories">
//       <div className="story">
//         <img src={"/upload/" + currentUser.profilePic} alt="" />
//         <span>{currentUser.name}</span>
//         <button>+</button>
//       </div>
//       {error
//         ? "Something went wrong"
//         : isLoading
//         ? "loading"
//         : data.map((story) => (
//             <div className="story" key={story.id}>
//               <img src={story.img} alt="" />
//               <span>{story.name}</span>
//             </div>
//           ))}
//     </div>
//   );
// };

// export default Stories;







import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

   const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmpgIDQ4jV1I5z6tyVb6qNh3__8pSLWu7HzRYnu8tYA&s",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNbxVwcqoToY7yLmRU8fiJcj0oxnjkJyZ2Tr7ORCUFg&s",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://i.pinimg.com/736x/88/34/56/88345662f07036eae64eaf92306506f8.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={"/upload/" + currentUser.profilePic } alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
