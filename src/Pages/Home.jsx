export function Home(props) {
  const { name, email, mobile } =
    JSON.parse(localStorage.getItem("userData")) || {};
  return (
    <>
      {name ? (
        <>
          <h1>Hello {name}</h1>
          <h2>{email}</h2>
          <h2>{mobile}</h2>
        </>
      ) : (
        <h1>Hello {props.Name}</h1>
      )}
      ;
    </>
  );
}
