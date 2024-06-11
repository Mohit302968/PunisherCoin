import React, { useState } from 'react';
import '../style/BuyPage.css';
import Imgcat from "../assests/Img-cat.png";
import GunShot from "../assests/shot.png";
import sparks from "../assests/sparks.png";
import USDTImg from "../assests/USDT.png";
 import SOLImg from "../assests/SOL.png";
 import Dropmenu from "../assests/dropmenu.png";
 import WalletImg from "../assests/wallet.png";
 import RankImg from "../assests/rank.png";
 import buyimg3 from "../assests/img_3.PNG";
 import LogoTrustWallet from "../assests/logo-trust-wallet.png";
 import MetaMaskImg from "../assests/MetaMask.png";
   import EthereumImg from "../assests/ethereum.png";
  import TTXImg from "../assests/TTX.png";
import presalepImg from '../assests/presalepImg.png';
import DaysImg from "../assests/DaysImg.png";
import progressbar from "../assests/progressbar.png";
import progressusd from "../assests/progressusd.png";
import usdnew from "../assests/usdnew.png";
import UnderInputImage from "../assests/UnderInputImage.png";
import USDT from "../assests/USDT.png";
import ETH from "../assests/ETH.png";
import SOL from "../assests/SOL.png";
import TTX from "../assests/TTX.png"; 
import MORE from "../assests/MORE.png"; 
import UnderInputPun from "../assests/UnderInputPun.png";
const BuyPage = () => {
  const progress = 70; // Progress percentage
  const total = 1000000; // Total data
  const current = (progress / 100) * total; // Current progress in data units

  const [showSection, setShowSection] = useState(false);

  const toggleSection = () => {
    setShowSection(!showSection);
  };

  return (
    <>
      <div className='main-repper'>
        <div className="container-fluid px-xl-5 px-lg-5 px-sm-2 px-md-2"> 
          <div className='row'>
          <div className='col-md-4'>
            <div className='left-wrap'>
              <img className="responsive-img" src={Imgcat} alt="Product" />
              <div className='left-wrap-content'>
                <h5 >Current Phase</h5>
                
                  <h3 className='subheading'>Presale Stage 1
                  <img src={sparks} alt="sparks" />
                  </h3>

                <p className='d-block'>
                  It's Time to Punish the Dictators in Meme!
                  Listing at 782.35%
                  <img src={presalepImg} alt="presalepImg" className="max-width ms-2" />
                </p>

                <div className="button-container">
                  <button className="bg-btn">How to Buy</button>
                  <button className="ghost-btn">Whitepaper</button>
                </div>

              </div>
            </div>
          </div>
          <div className='col-md-1'></div>
         <div className='col-md-7'>
            <div className='right-wrap'>
            <h3>Buy Now Before Price Rise</h3>
            <div className="day-section">
              <span>
                <p>Days</p>
                <b>120</b>
              </span>
              <span>
              <p>Hours</p>
              <b>12</b>
              </span>
              <span>
              <p>Minutes</p>
              <b>25</b>
              </span>
              <span>
              <p>Seconds</p>
              <b>45</b>
              </span>
            </div>

             <div className='right-wrap-content'>
              <div className="gap"></div>
              <span className="progress-value d-flex justify-content-between">
                <p>$690,140.36/$1000000</p>
                <p>70%</p>
              </span>
             <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                <img src={GunShot} alt="Product" />
              </div>

                 <div className='total-amount'>
                  <span>----------------</span>
                    <b>$1 USDT = 7,692.30769231 $PUN</b>
                  <span>----------------</span>
                </div> 

                <div className="coin-section">
                  <span className="coin-section-inner coin-section-hide  align-items-center">
                    <img src={USDTImg} alt="USDT coin" />
                    <span>
                      <b>USDT</b>
                      <p>ERC-20</p>
                    </span>
                  </span>
                  <span className="coin-section-inner align-items-center d-flex">
                    <img src={EthereumImg} alt="USDT coin" />
                    <span>
                      <b>ETH</b>
                      <p>ERC-20</p>
                    </span>
                  </span>
                  <span className="coin-section-inner align-items-center d-flex">
                    <img src={SOLImg} alt="USDT coin" />
                    <span>
                      <b>SOL</b>
                      <p>Solana</p>
                    </span>
                  </span>
                  <span className="coin-section-inner align-items-center d-flex">
                    <img src={TTXImg} alt="USDT coin" />
                    <span>
                      <b>TTX</b>
                      <p>TRC-20</p>
                    </span>
                  </span>

                  <span className="coin-section-inner align-items-center d-flex">
                  <b>More</b>
                    <img className="w-auto h-auto" src={Dropmenu} alt="USDT coin" />
                  </span>
                </div>


                <div className="form-gap"></div>
              
                <div className="row">
                  <div className='col-md-6'>
                    <span className="input-label d-flex justify-content-between">
                    <h5>SOL you pay </h5>
                    <h5 className="colored">max</h5>
                    </span>
                   
                    <div className="input-wrapper">
                      <input type="text" className='input-with-image' />
                      <img src={UnderInputImage} alt="Input Decoration" className="input-image" />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <span className="input-label"><h5>$PUN you received</h5></span>
                 
                  <div className="input-wrapper">
                    <input type="text" className='input-with-image' />  
                    <img src={UnderInputPun} alt="Input Decoration" className="input-image" />
                  </div>
                  </div>
                  <div className="form-gap"></div>
                  <div className='col-md-9'>
                    <span className="input-label"><h5 className="colored">$PUN you received</h5></span>
                 
                  <div className="input-wrapper">
                    <input type="text" className='input-with-image' />  
                    <img src={UnderInputPun} alt="Input Decoration" className="input-image" />
                  </div>
                  </div>
                  <div className='col-md-3 d-flex align-items-center mb-3'>
                  <div class="button-container mt-3">
                    <button class="bg-btn input-border">Apply Code</button>
                    </div>

                </div> 
                <div className="form-gap"></div>
                <div class="button-container">
                  <button class="bg-btn px-5">Buy Now</button>
                  <button class="ghost-btn px-5">How to Buy</button>
                  </div>

              </div>
            </div>
          </div>  
        </div>


        
        <div className="form-gap"></div>

      </div>

       


      </div>
      <div className='overview-section py-xl-1 py-lg-1 py-md-4 py-sm-4'>
        <div className='container p-xl-5 p-lg-5 p-md-1 p-sm-1'>
          <div className='row'>
            <div className='form-gap'></div>
            <div className='subheading-main'>
            <h3 className='subheading'> Presale Overview
            <img src={sparks} alt="sparks" />
            </h3>
            </div>
            <div className="form-gap"></div>
            <div className='table-section'>
            <section className="fluid-container">
        <div className="">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Stages</th>
                  <th>SPUN Allocation</th>
                  <th>Stage Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className='selected'>
                  <td>Presale Stage I</td>
                  <td>400 Million</td>
                  <td>$0.00270</td>
                </tr>
                <tr>
                  <td>Presale Stage II</td>
                  <td>800 Million</td>
                  <td>$0.00300</td>
                </tr>
                <tr>
                  <td>Presale Stage III</td>
                  <td>1 Billion</td>
                  <td>$0.00350</td>
                </tr>
                <tr>
                  <td>Presale Stage IV</td>
                  <td>1 Billion</td>
                  <td>$0.00400</td>
                </tr>
                <tr>
                  <td>Presale Stage V</td>
                  <td>800 Million</td>
                  <td>$0.00500</td>
                </tr>
                <tr>
                  <td><b>Total</b></td>
                  <td><b>4 Billion</b></td>
                  <td></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3">The listing price of the Punisher Coin (SPUN) after the final Stage V of the presale is set at <strong>$0.0150</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
      </section>
            </div>
          </div>
          <div className="form-gap"></div>
        </div>

        
        </div>

        <div className="ft">
                    <footer>
                    <a href="#liquidity-locked"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L8.89064 5.10936L14 7L8.89064 8.89064L7 14L5.10936 8.89064L0 7L5.10936 5.10936L7 0Z" fill="white"/>
                    </svg>
                    Liquidity Locked</a>
                    <a href="#buyback-burn"> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L8.89064 5.10936L14 7L8.89064 8.89064L7 14L5.10936 8.89064L0 7L5.10936 5.10936L7 0Z" fill="white"/>
                    </svg>
                    Buyback &amp; Burn</a>
                    <a href="#audit-report"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L8.89064 5.10936L14 7L8.89064 8.89064L7 14L5.10936 8.89064L0 7L5.10936 5.10936L7 0Z" fill="white"/>
                    </svg>
                    Audit Report</a>
                    </footer>
        </div>


        <div className="second-sectionbuy">
        <div className="subheading-main">
          <h3 className='subheading'>Earn More with
          Referrals
                    <img src={sparks} alt="sparks" />
                    </h3>
        </div>
        <div className='form-gap'></div>
        <div className="row">
          <div className="col-md-6">
            <div className='card_buy'>
            <div className='row'>
              <p className="colored">Step1</p>
              <p class="font-weight-normal">Secure connect your wallet</p>
              <div class="button-container justify-content-start">
                <button class="bg-btn px-5">Connect Wallet</button>
                </div>
             
            </div>



            <div className='pt-4'>
              <p className='colored'>Step2</p>
              <p class="font-weight-normal">Share Your referral code with friends, family, or your crypto community.</p>

              <div class="row">
                <div class="input-group">
                  <input type="text" class="form-control boxinput" placeholder="Referral Code"></input>
                  <div class="input-group-append">
                    <button class="btnshadow btn btn-danger" type="button">Share Now</button>
                  </div>
                </div>
              </div>

              <div class="row">
                <hr class="my-4" />
              </div>
                <p className='mb-0'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
              
            </div>
            </div>

          </div>
          <div className="col-md-6 ">
            <div className='card_buy'>
            <div class="row m-2">
              <div class="col-sm-12 bg-light rounded divboxrounded d-flex justify-content-center align-items-center flex-column">
                <p class="text-center text-gray mt-2 font-weight-bold">1st Place </p>
                <h4 class="usdcss">$500 USDC</h4>
              </div>
            </div>
            <div class="row m-2">
              <div class="col-sm-12 bg-light rounded divboxrounded d-flex justify-content-center align-items-center flex-column">
                <p class="text-center text-gray mt-2 font-weight-bold">2st Place </p>
                <h4 class="usdcss">$250 USDC</h4>
              </div>
            </div>
            <div class="row m-2">
              <div class="col-sm-12 bg-light rounded divboxrounded d-flex justify-content-center align-items-center flex-column">
                <p class="text-center text-gray mt-2 font-weight-bold">3st Place </p>
                <h4 class="usdcss">$100 USDC</h4>
              </div>
            </div>
            <div class="row m-2">
              <div class="col-sm-12 bg-light rounded divboxrounded d-flex justify-content-center align-items-center flex-column">
                <p class="text-center text-gray mt-2 font-weight-bold">Places 4-10</p>
                <p class=" text-gray mt-2">win $ 50 worth of SPn coins each based on tecxgy</p>
              </div>
            </div>
            </div>
          </div>
          <div className='form-gap'></div>
          <div class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-12 col-sm-12">
          <p class="d-flex justify-content-center align-items-center flex-column"> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
        </div>
        </div>
      </div>



<div className='form-gap'></div>
      
      <div className='container p-xl-5 p-lg-5 p-md-1 p-sm-1'>
<div class="row px-2">
      <div className="subheading-main">
          <h3 className='subheading'>Top Earners
                    <img src={sparks} alt="sparks" />
                    </h3>
        </div>
        <div className='form-gap'></div>
        <div class="card">
          <div class="card-body">
           <div className='div-head dark'>
            <span>Rank</span>
            <span>Wallet</span>
            <span>Number of Referrals</span>
           </div>
           <div className='div-head light'>
           <span> <img src={RankImg} alt="RankImg" /></span>
            <span>Wallet</span>
            <span>Number of Referrals</span>
           </div>

           <div className='div-head light'>
           <span> <img src={RankImg} alt="RankImg" /></span>
            <span>Wallet</span>
            <span>Number of Referrals</span>
           </div>

           <div className='div-head light'>
           <span> <img src={RankImg} alt="RankImg" /></span>
            <span>Wallet</span>
            <span>Number of Referrals</span>
           </div>
           <div className='div-head light'>
           <span> <img src={RankImg} alt="RankImg" /></span>
            <span>Wallet</span>
            <span>Number of Referrals</span>
           </div>
           <div className='div-head light'>
           <span> <img src={RankImg} alt="RankImg" /></span>
            <span>Wallet</span>
            <span>Number of Referrals</span>
           </div>
          </div>
        </div>
      </div>
      </div>

 <section className='fluid' id="cntdiv">
 
        <div className="presale-overview1">
        <div className='container p-xl-5 p-lg-5 p-md-1 p-sm-1'>
        <div className="subheading-main">
          <h3 className='subheading'>How to buy
                    <img src={sparks} alt="sparks" />
                    </h3>
        </div>
        <div className='form-gap'></div>
        <div className="row">
          <div className='col-md-4'>
          <div className="tab-section"  id="tblset1">
           
           <button id="btn1"><span className="bg-light text-dark">1</span> Set Up Your Wallet</button>
           <button  id="" className="mybtn"><span>2</span> Load Your Wallet</button>
           <button className="mybtn"><span>3</span> Buy Punsiher Coins</button>
           <button className="mybtn"><span>4</span> Get Your Hands On $PUN</button>

          </div>
          </div>
          <div className='col-md-8'>
          <div className="table"  id="tblset">
          <div className="subheading-main">
          <h3 className='subheading subheading-new text-left'>
                    <img src={WalletImg} alt="Wallet" />
                    STEP 1: <b>Set Up Your Wallet</b>
                    </h3>
        </div>
           <p id="p1">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
           </p>

    <div className='d-flex'>
    
   
    </div>

           <div class="button-container justify-content-start">
           <span> <img src={MetaMaskImg} alt="MetaMaskImg" />
           <button class="bg-btn px-4">Download Metamask</button>
           </span>
           
           <span> <img src={LogoTrustWallet} alt="LogoTrustWallet" />
           <button class="ghost-btn px-5">Download Trust</button>
           </span>
           </div>
          </div>
          </div>

        </div>
        </div>
        </div>
      </section> 


        <center>
        <div className="container">
          <div id='card'>

            <div id="test1">
              
              <p className="card-text">Welcome Abroad The Punisher <br /> Coin Fame! It's Time to Punish The <br />Dictators In Meme.</p>
              <button className="mybtn">How to Buy</button>
            </div>

            <img src={buyimg3} id="cardimg" alt="Image"></img>
          </div>
        </div>

      </center> 
      </div>
    </>
  );
};

export default BuyPage;
