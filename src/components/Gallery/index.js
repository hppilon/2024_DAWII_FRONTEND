import Profile from "../Profile";

export default function Gallery() {
  return (
    <>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile
        nome={"Helena"}
        foto={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR732kxmhGtsXMhhnlFsAkv18iaxhI1BG1mMQ&s"
        }
      />
      <Profile
        nome={"IFSUL"}
        foto={
          "https://www.jornaltradicao.com.br/wp-content/uploads/2022/10/IFSUl-Pelotas.jpg"
        }
      />
      {/* <Profile /> */}
    </>
  );
}
