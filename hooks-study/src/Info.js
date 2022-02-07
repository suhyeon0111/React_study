import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

// import React, { useState, useEffect } from "react";

// // const Info = () => {
// //   const [name, setName] = useState("");
// //   const [nickname, setNickname] = useState("");
// //   //   useEffect(() => {
// //   //     console.log("렌더링이 완료되었습니다!");
// //   //     console.log({
// //   //       name,
// //   //       nickname,
// //   //     });
// //   //   });
// //   useEffect(() => {
// //     console.log("마운트될 때만 실행됩니다. ");
// //   }, []);

// //   const onChangeName = (e) => {
// //     setName(e.target.value);
// //   };

// //   const onChangeNickname = (e) => {
// //     setNickname(e.target.value);
// //   };
// const Info = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     name: "",
//     nickname: "",
//   });
//   const { name, nickname } = state;
//   const onChange = (e) => {
//     dispatch(e.target);
//   };

//   return (
//     <div>
//       <div>
//         <input name="name" value={name} onChange={onChangeName} />
//         <input name="nickname" value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;
