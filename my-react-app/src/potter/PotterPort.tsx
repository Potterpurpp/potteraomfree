import styled from "styled-components";

const PotterPort = () => {
  return (
    <>
      <section className="bg-fuchsia-950 w-full h-screen">
        <div className="myname">Heelo</div>
      </section>
    </>
  );
};

export default styled(PotterPort)`
  .myname {
    text-align: center;
    font-size: 2em;
    margin-top: 100px;
    background-color: red;
  }
`;
