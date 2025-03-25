export default function NavigationBar() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <img src={"logo.svg"} width={30} alt="logo.svg" />
        <h1>Taskify</h1>
      </div>
    </>
  );
}
