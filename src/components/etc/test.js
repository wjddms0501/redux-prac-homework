// {
//   users.map((user) =>
//     user.isDone === true ? (
//       <div className="square-style">
//         <div key={user.id}>
//           <h2>{user.title}</h2>
//           <h4>{user.todo}</h4>
//           <div className="btns">
//             <CustomButton
//               width="130px"
//               height="40px"
//               backgroundColor="transparent"
//               border="2px solid red"
//               onClick={() => {
//                 onChangeHandler(user.id);
//               }}
//             >
//               삭제하기
//             </CustomButton>
//             <CustomButton
//               width="130px"
//               height="40px"
//               backgroundColor="transparent"
//               border="2px solid green"
//               // onClick={() => {
//               //   onChangeHandler(user.isDone);
//               //   if (user.isDone === true) {
//               //     //값을 변경하는 방법
//               //     user.isDone = false;
//               //   } else if (user.isDone === false) {
//               //     user.isDone = true;
//               //   }
//               // }}
//             >
//               {user.isDone === true ? "완료" : "취소"}
//             </CustomButton>
//             {/*👆CustomButton의 props로 color 넘기기 */}
//             {/*👆삭제버튼 */}
//           </div>
//         </div>
//       </div>
//     ) : null
//   );
// }
