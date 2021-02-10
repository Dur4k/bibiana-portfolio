import React from "react";
import "../sass/portfolio.scss";
import pic1 from "../picture/Nicolas-Solerieu-min.jpg";
import pic2 from "../picture/bookclub.jpg";
import pic3 from "../picture/sugar.png";
import pic4 from "../picture/2020.jpg";
import pic5 from "../picture/5habbits.jpg";
import pic6 from "../picture/bookclubD.jpg";
import Element from "../components/Element.js";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-text">Portfolio</div>
      <div className="grid">
        <Element
          pic={pic1}
          main="Glow From The Inside Out, Best Supplements For Your Skin"
          link="https://keiseimagazine.com/the-best-supplements-for-your-skin/"
          text="Most of us girls try to get our skin to look its healthiest and most radiant it can get! And we would do absolutely everything to have a good skin day every day, right? I am sure that the skincare products you use contain some vitamins or skin supplements. However, have you ever wondered if you can achieve your best skin from the inside out? There is only so much you can treat with topicals, so you should definitely consider taking care of your skin in a more systematic way. "
        />
        <Element
          pic={pic3}
          main="The Effects Of Sugar On Your Mind, Skin And Body"
          link="https://keiseimagazine.com/the-effects-of-sugar-on-your-mind-skin-and-body/"
          text="It is no secret that most of us have a sweet tooth or realistically called a “sugar problem”. However, sugar can be very addictive and therefore, in the light of the sugar awareness week we discuss the effects of sugar on your mind, skin and body. Seeing the harmful impact of sugar will make you want to create healthier habits and kick it out of your diet. "
        />
        <Element
          pic={"https://keiseimagazine.com/wp-content/uploads/IMG_6801-min.jpg"}
          main="A Guide To Prevent And Get Rid Of ‘Maskne’"
          link="https://keiseimagazine.com/a-guide-to-prevent-and-get-rid-of-maskne/"
          text="I think it is safe to say that with the Covid19 not going away any time soon we are all wearing  face masks for a large part of our days. It is completely necessary in protecting ourselves and the others at the moment. However, it may get very troublesome especially if your skin is suffering underneath. Are you experiencing an irritation and breakouts around your chin and lower cheeks area? The face mask might be exactly what is causing it!"
        />
        <Element
          pic={pic4}
          main="How To Turn 2020 Into A Positive Memory"
          link=""
          text="It is undeniable that the current state of our world and our planet is in a decline. We only have one planet to live on and we depend on it to make us healthy. However, mplastic waste, and climate change are only some of the rising factors impacting our planet. "
        />
        <Element
          pic={pic5}
          main="5 Habits You Need To Adopt In 2021"
          link=""
          text="Every time, at the beginning of a new year we tend to make a mental or an actual list of our new year’s resolutions. And each year we feel extra motivated to be better, smarter, healthier, more outgoing, less lazy and the list could go on and on and on.However, these resolutions often get forgotten within our busy lives and we often eventually end up saying “Maybe I’ll start and do that next year”"
        />
        <Element
          pic={"https://keiseimagazine.com/wp-content/uploads/Gift-guide.jpeg"}
          main="The Pampering Christmas Gift Guide"
          link="https://keiseimagazine.com/the-pampering-christmas-gift-guide/"
          text="t is that amazing time of the year again when Christmas is near and the holiday season is upon us. This year feels really special as we all might need extra cheer in our lives. Even though the Christmas time can become quite stressful, it is the best and the most joyful time spent surrounded by our nearest friends and family. To take some of the stress away, we have curated a KeiSei approved pampering gift guide."
        />
        <Element
          pic={"https://keiseimagazine.com/wp-content/uploads/1-min.jpg"}
          main="3 Must-Watch Eye Opening Shows On Netflix Right Now"
          link="https://keiseimagazine.com/3-must-watch-eye-opening-shows-on-netflix-right-now/"
          text="It is undeniable that the current state of our world and our planet is in a decline. We only have one planet to live on and we depend on it to make us healthy. However, modern life is a huge threat to Earth and it is damaging its ecosystems. Deforestation, greenhouse gas emissions, pollution, globalisation, plastic waste, and climate change are only some of the rising factors impacting our planet. "
        />

        <Element
          pic={
            "https://cdn2.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZzMy5hbWF6b25hd3MuY29tJTJGZmlsZXMuYWN0aXZhdGUuc29jaWFsJTJGdXNlci1pbWFnZS0xMjYyMTUxMy0xNTkyMDY4NzIwLTVlZTUwYTcwMDI0NGE=?checksum=e1f96abc9c7fcc73c44d7f637a0ffc1cd1c24a23&format=j"
          }
          main="My Current Morning Routine"
          link="https://www.bloglovin.com/@boobsbrainsandbeauty/my-current-morning-routine"
          text="Today, I would love to share with you my current morning routine, which I have perfected in quarantine. I try to start my day in a positive way, especially now, that the world is in such a negative state. I have changed my routine up to fit my current lifestyle, and to help me make the most out of my morning so I can have a productive day!"
        />
        <Element
          pic={"https://s3.amazonaws.com/files.activate.social/user-image-12621513-1591976303-5ee3a16f564c2"}
          main="Quarantine Finds"
          link="https://www.bloglovin.com/@boobsbrainsandbeauty/quarantine-finds"
          text="Due to the COVID19 crisis, I have spent the majority of my time inside my London home, and as I am sure many of you did, I have found myself with a bunch of free time on my hands. My main goal has been to put this time into positive and productive activities, but also to spend my money in the most efficient way possible."
        />
        <Element
          pic={
            "https://cdn2.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZzMy5hbWF6b25hd3MuY29tJTJGZmlsZXMuYWN0aXZhdGUuc29jaWFsJTJGdXNlci1pbWFnZS0xMjYyMTUxMy0xNTgwNjUxNjQ5LTVlMzZkNDgxNzNlOWY=?checksum=cd799c9a560fb52483bf095fce20beacf0f75bf0&format=j"
          }
          main="January 2020 Skincare Favourites"
          link="https://www.bloglovin.com/@boobsbrainsandbeauty/january-2020-skincare-favourites"
          text="Let me start with saying that January was an incredibly long and cold month, which I am happy is now over. My whole skincare routine was focused on dry skin mainly influenced by the winter weather. Additionally, I have finally found a way how to deal with my biggest skincare issue: milia!"
        />
        <Element
          pic={
            "https://cdn3.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZzMy5hbWF6b25hd3MuY29tJTJGZmlsZXMuYWN0aXZhdGUuc29jaWFsJTJGdXNlci1pbWFnZS0xMjYyMTUxMy0xNTc1ODQ1MTQxLTVkZWQ3ZDE1YTJmYjg=?checksum=29c2296f4ac9df777a575a629fcedd5bc3c14943&format=j"
          }
          main="London Glossier Haul"
          link="https://www.bloglovin.com/@boobsbrainsandbeauty/london-glossier-haul"
          text="I immediately got excited when I saw Emily Weiss's post about Glossier pop-up opening in London! How convenient that my current fave beauty brand is now available in store in a city I live in! I was extremely excited to go and experience the 'Glossier store experience'."
        />
        <Element
          pic={
            "https://cdn1.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZzMy5hbWF6b25hd3MuY29tJTJGZmlsZXMuYWN0aXZhdGUuc29jaWFsJTJGdXNlci1pbWFnZS0xMjYyMTUxMy0xNTcyMzYxMDQ1LTVkYjg1MzU1Yjc1YzQ=?checksum=af464a30a92bf53dfab0e2b8aa50004a2a2921ea&format=j"
          }
          main="October 2019 Favourites"
          link="https://www.bloglovin.com/@boobsbrainsandbeauty/october-2019-favourites"
          text="October in London has definitely been very rainy and cold, which has made me take an extra care to battle dryness of my skin and hair. The weather has also made me want to cozy up with a blanket, eat comfort food and drink loads of tea."
        />
        <Element
          pic={
            "https://cdn3.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZzMy5hbWF6b25hd3MuY29tJTJGZmlsZXMuYWN0aXZhdGUuc29jaWFsJTJGdXNlci1pbWFnZS0xMjYyMTUxMy0xNTcxNjAxMTQ2LTVkYWNiYWZhYmU4MzA=?checksum=7b0fb98477e0c575b858eefd7fdf798fece67c96&format=j"
          }
          main="New GLOSSIER'S FutureDew"
          link="https://www.bloglovin.com/@boobsbrainsandbeauty/new-glossiers-futuredew"
          text="When I saw that Glossier launched a new product I knew I had to have it immediately. A product which promises to keep your skin glowing all day long plus it is full of good ingredients? Yes, please!"
        />
        <Element
          pic={
            "https://cdn1.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZzMy5hbWF6b25hd3MuY29tJTJGZmlsZXMuYWN0aXZhdGUuc29jaWFsJTJGdXNlci1pbWFnZS0xMjYyMTUxMy0xNTcwOTc1NDg4LTVkYTMyZjAwMTg0MWU=?checksum=d77a834a8c5de4d59aeae8e3df2a8cc378054308&format=j"
          }
          main="Fall Beauty Haul!"
          link="https://www.bloglovin.com/@boobsbrainsandbeauty/fall-beauty-haul-3569675"
          text="Whenever the new season comes I get the nudge to change my whole skincare and makeup routine. Especially in these autumnal months when summer collapsed into fall all at once and my skin got drier and now craves for a change. That is why this month I have browsed through Cult Beauty and SpaceNK websites to order some new goodies."
        />
      </div>
    </div>
  );
};

export default Portfolio;
