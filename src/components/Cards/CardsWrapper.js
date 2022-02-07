import styled from "styled-components";

 const CardsWrapper=styled.div`
  .row {
   margin-top: 50px;

   .col-12 {
    .card {
     min-height: 427px;
     border: none;
     margin-bottom: 20px;

     .card-body {
      padding:0;
      height: 250px;
      position: relative;
      border-radius:16px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      margin-bottom: 20px;
      
      img{
       object-fit: cover;
       background-position: center;
      }
      &:hover .mask{
       opacity: 1;
      }

      .mask {
       transition: .5s;
       position: absolute;
       bottom: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.56) 100%);
       filter: drop-shadow(0px 6px 20px rgba(0, 0, 0, 0.06));
       backdrop-filter: blur(1px);
       opacity:0;
     
       
        .editDelete{
         margin-top: 200px;
         font-size: 22px;
         border:2px solid rgba(248, 255, 170, 1);
         color:rgba(248, 255, 170, 1);
         margin-right: 10px;
         border-radius: 15px;
         padding:15px 0;
         transform:scale(.8);
         
         
         &:last-child{
          color: rgba(255, 161, 161, 1) !important;
          border:2px solid rgba(255, 161, 161, 1)!important;
         }
         
        }
       }
     }

     .card-footer {
      text-align: center;
      border: none;
      background-color: transparent;

      h2 {
       font-weight: 600;
      }

      p {
       color: rgba(40, 42, 48, 0.3);
       font-weight: 600;
      }
     }

    }
   }
  }
 `

export default CardsWrapper;