// import React from 'react'
// import './MacBookPro141.css'
// import ImgAsset from '../public'



// export default function MacBookPro141 () {
// 	return (
// 		<div className='MacBookPro141_MacBookPro141'>
// 			<div className='Group13'>
// 				<img className='Vector1' src = {ImgAsset.MacBookPro141_Vector1} />
// 			</div>
// 			<div className='Rectangle1'/>
// 			<span className='CreditWise'>CreditWise</span>
// 			<span className='AllInOneWebsite'>All In One Website</span>
// 			<span className='LoanApprovalFraudulentTransactionPrediction'>Loan Approval, <br/>Fraudulent Transaction Prediction</span>
// 			<form>
// 			<div className='Frame3'>
// 				<div className='Frame1'>
					
// 					<span className='Email'>
// 						<input type='email' placeholder='Email' required/>
// 					</span>
// 				</div>
// 			</div>
// 			<div className='Frame4'>
// 				<div className='Frame2'>
// 				<span className='Password'>
					
// 						<input type='password' placeholder='Password'required/>
					
// 				</span>
// 				</div>
// 			</div>
// 			{/* <div className='Frame2_1'>
// 				<span className='ForgotPassword'>Forgot Password?</span>
// 			</div> */}
//         <div className="Frame5">
//           <div className="Frame2_2">
//             <span className="SignIn">
//               <button type="submit">Login</button>
//             </span>
//           </div>
//         </div>
//       </form>

//       <div className="logonobackground1">
//         <div className="Group">
//           <div className="Frame">
//             <div className="tightbounds">
//               <div className="Frame_1">
//                 <div className="Group_1">
//                   <div className="Frame_2">
//                     <div className="Group_2">
//                       <div className="Frame_3">
//                         <div className="textblocktransform">
//                           <div className="textblock">
//                             <div className="Group_3">
//                               <div className="Frame_4">
//                                 <div className="Group_4">
//                                   <div className="Frame_5">
//                                     <img
//                                       className="text0"
//                                       src={ImgAsset.MacBookPro141_text0}
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="Group_5">
//                               <div className="Frame_6">
//                                 <div className="Group_6">
//                                   <div className="Frame_7">
//                                     <img
//                                       className="text1"
//                                       src={ImgAsset.MacBookPro141_text1}
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="Group_7">
//                       <div className="Frame_8">
//                         <div className="Group_8">
//                           <div className="icon0">
//                             <img
//                               className="Vector"
//                               src={ImgAsset.MacBookPro141_Vector}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <img className="Vector_1" src={ImgAsset.MacBookPro141_Vector_1} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Group_9">
//         <div className="Frame_9">
//           <div className="tightbounds_1">
//             <div className="Frame_10">
//               <div className="Group_10">
//                 <div className="Frame_11">
//                   <div className="Group_11">
//                     <div className="Frame_12">
//                       <div className="textblocktransform_1">
//                         <div className="textblock_1">
//                           <div className="Group_12">
//                             <div className="Frame_13">
//                               <div className="Group_13">
//                                 <div className="Frame_14">
//                                   <img
//                                     className="text0_1"
//                                     src={ImgAsset.MacBookPro141_text0_1}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="Group_14">
//                             <div className="Frame_15">
//                               <div className="Group_15">
//                                 <div className="Frame_16">
//                                   <img
//                                     className="text1_1"
//                                     src={ImgAsset.MacBookPro141_text1_1}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Group_16">
//                     <div className="Frame_17">
//                       <div className="Group_17">
//                         <div className="icon0_1">
//                           <img
//                             className="Vector_2"
//                             src={ImgAsset.MacBookPro141_Vector_2}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <img className="Vector_3" src={ImgAsset.MacBookPro141_Vector_3} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import "./MacBookPro141.css";
import ImgAsset from "../public";
import { useDispatch } from "react-redux";
import { loginUser } from "../Actions/User";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function MacBookPro141() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {isAuthenticated} = useSelector(state => state.user)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const loginHandler = (e) => {
    e.preventDefault();

	dispatch(loginUser(email, password))

  if(!email || !password) {
    
  }
  navigate('/');



	console.log('logged in')
  };

  return (
    <div className="MacBookPro141_MacBookPro141">
      <div className="Group13">
        <img className="Vector1" src={ImgAsset.MacBookPro141_Vector1} />
      </div>
      <div className="Rectangle1" />
      <span className="CreditWise">CreditWise</span>
      <span className="AllInOneWebsite">All In One Website</span>
      <span className="LoanApprovalFraudulentTransactionPrediction">
        Loan Approval, <br />
        Fraudulent Transaction Prediction
      </span>
      <form className="loginForm" onSubmit={loginHandler}>
        <div className="Frame3">
          <div className="Frame1">
            <span className="Email">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
          </div>
        </div>
        <div className="Frame4">
          <div className="Frame2">
            <span className="Password">
              <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)}/>
            </span>
          </div>
        </div>
        {/* <div className='Frame2_1'>
				<span className='ForgotPassword'>Forgot Password?</span>
			</div> */}
        <div className="Frame5">
          <div className="Frame2_2">
            <span className="SignIn">
              <button type="submit" >Login</button>
            </span>
          </div>
        </div>
      </form>

      <div className="logonobackground1">
        <div className="Group">
          <div className="Frame">
            <div className="tightbounds">
              <div className="Frame_1">
                <div className="Group_1">
                  <div className="Frame_2">
                    <div className="Group_2">
                      <div className="Frame_3">
                        <div className="textblocktransform">
                          <div className="textblock">
                            <div className="Group_3">
                              <div className="Frame_4">
                                <div className="Group_4">
                                  <div className="Frame_5">
                                    <img
                                      className="text0"
                                      src={ImgAsset.MacBookPro141_text0}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Group_5">
                              <div className="Frame_6">
                                <div className="Group_6">
                                  <div className="Frame_7">
                                    <img
                                      className="text1"
                                      src={ImgAsset.MacBookPro141_text1}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Group_7">
                      <div className="Frame_8">
                        <div className="Group_8">
                          <div className="icon0">
                            <img
                              className="Vector"
                              src={ImgAsset.MacBookPro141_Vector}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="Vector_1" src={ImgAsset.MacBookPro141_Vector_1} />
            </div>
          </div>
        </div>
      </div>
      <div className="Group_9">
        <div className="Frame_9">
          <div className="tightbounds_1">
            <div className="Frame_10">
              <div className="Group_10">
                <div className="Frame_11">
                  <div className="Group_11">
                    <div className="Frame_12">
                      <div className="textblocktransform_1">
                        <div className="textblock_1">
                          <div className="Group_12">
                            <div className="Frame_13">
                              <div className="Group_13">
                                <div className="Frame_14">
                                  <img
                                    className="text0_1"
                                    src={ImgAsset.MacBookPro141_text0_1}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="Group_14">
                            <div className="Frame_15">
                              <div className="Group_15">
                                <div className="Frame_16">
                                  <img
                                    className="text1_1"
                                    src={ImgAsset.MacBookPro141_text1_1}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Group_16">
                    <div className="Frame_17">
                      <div className="Group_17">
                        <div className="icon0_1">
                          <img
                            className="Vector_2"
                            src={ImgAsset.MacBookPro141_Vector_2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="Vector_3" src={ImgAsset.MacBookPro141_Vector_3} />
          </div>
        </div>
      </div>
    </div>
  );
}