/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Team.css';

function Services() {


  const Data = [
    {
      id: 1,
      img: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m326bzkhins/gallery/in-galaxy-m32-5g-8gb-ram-sm-m326bzkhins-497638130?$684_547_PNG$",
      name: "Samsung",
      category: "Mobile",
      price: "12₹",
      description:
        "I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },

    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGVLhzzHGzpZh7PQHR6qKxBGasgwRypuNT14NxbPPYuTWDlmVwYWTqdea_wqIG2w&usqp=CAc",
      name: "Nokia",
      category: "Mobile",
      price: "20₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
   
    {
      id: 4,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEd2sMJWRala7OA7kyXYZ-XeMCMvodsMHhRswDkrohTTyQ1k5T32SzhPwn9k7JX_Mz7-thhDLu1w&usqp=CAc",
      name: "Boat",
      category: "Earphone",
      price: "50₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 5,
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTH4Ax3_0nzVtLrV7n3iDMeazoUDmT1of1dZWRYcmiWOH4TEub-Ci79tYfEjsC_oPa7mHYEYbo1MCLC&usqp=CAc",
      name: "Redmi",
      category: "Earphone",
      price: "80₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
  ]
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <section class="section-white">


            <div class="container">

               <div class="row">
      {Data.map((curElem) => {
        
        return (
          <>


                <div class="col-sm-6 col-md-4">

                  <div class="team-item">
 

                    <img src={curElem.img} class="team-img" alt="pic" />
                    <h3>JOHNATHAN HAWKINS</h3>
                    <div class="team-info"><p>Head of SEO</p></div>
                    <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>

                    <ul class="team-icon">

                      <li><a href="#" class="twitter">
                        <i class="fa fa-twitter"></i>
                      </a></li>

                      <li><a href="#" class="pinterest">
                        <i class="fa fa-pinterest"></i>
                      </a></li>

                      <li><a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                      </a></li>

                      <li><a href="#" class="dribble">
                        <i class="fa fa-dribbble"></i>
                      </a></li>

                    </ul>
                  </div>
                </div>

          </>
        )
        
      })}
      </div>

      
    </div>
     
    </section>
  )
}

export default Services;

