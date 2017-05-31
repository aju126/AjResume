class Recommend

  def reco_1
    { name: 'Santosh Kumar',
      desc: 'Ajith and I worked together at Cerner. We were part of the same org team that focused on building unified healthcare platform integrating workflows across desktop, mobile, web and cloud. Ajith joined us bringing in mobile expertise in mobile os (android and ios). He is quick learner and did not hesitate to switch his expertise from mobile to web, which needed him to get a firm grasp on Ruby and web stack. He is not afraid of challenges at work and is focused on learning and applying his learning to work.',
      source: 'linkedin',
      desi: 'Technology Evangelist',
      image: '/assets/santosh.jpg'}
  end

  def reco_2
    { name: 'Chethan Rao',
      desc: "I have known Ajith for about 4 years now. First as a colleague and later as a good friend. When we were working together, he came across as a hard working enthusiast who was always drawn towards following the best programming practices. In his quest to be adept in whatever he does, he improvised quite often. Ajith always carried a Rockstar attitude with him - later I came to know that he was a kick-ass guitarist too. He is a musician who can code. I can recommend this guy without blinking an eye. He's one guy who gets things done! Full stop!",
      desi: 'Tech Lead (iOS) at Cleartrip.com',
      source: 'linkedin',
      image: '/assets/chetan.jpg'}
  end

  def reco_3
    { name: 'Vamshi',
      desc: "Ajith has a very good knowlege on all mobile platforms and iOS in particular. He has contributed significantly to the projects he has been involved. The quality I like about him is he is very open if he does not know something and is not afraid to ask,find out and learn.",
      source: 'linkedin',
      desi: 'Technical Architect - Mobile',
      image: '/assets/vamshi.jpg'}
  end

  def reco_4
    { name: 'Nanda Herle',
      desc: "Ajith have been a very dedicated engineer, who tries hard to solve most difficult of business problems. During his tenure at mportal.",
      source: 'linkedin',
      desi: 'Sr.Software Engineer at Valtech',
      image: '/assets/nanda.jpg'}
  end

  def reco_5
    { name: 'Kumar Shastry',
      desc: "Ajith is a Stellar software developer with good hands-on in Mobile technology, basic computer science, he can learn and work on any technologies and solve the problems. He is very enthusiastic with great energy. It was nice experience to work with him. All the best Ajith.",
      source: 'linkedin',
      desi: 'Senior Software Development Engineer at Intel',
      image: '/assets/kumar.jpg'}
  end

  def reco_6
    { name: 'Guru Raj',
      desc: "Ajith has many times amazed me with his highly creative, novel and out of the box solutions always be it in development or any other fun and frolic activities at work place, I had a chance to work with him for 2 plus years and always admired his technical skills/problem solving techniques with a never give up attitude which makes the life much easier to everyone around. His passion for exploring new areas and research to create better product is very evident in all the discussion he had with me. Wish him a fantastic journey always.",
      desi: 'Sr Designer',
      source: 'linkedin',
      image: '/assets/gururaj.jpg'}
  end

  def reco_7
    { name: 'Soumya Prakash Dhar',
      desc: "Ajith is a stellar developer; he is a great resource and his skills on multi platform app development are something that I will always put my money on. This guy is going places and I am truly looking forward to an opportunity to work closer with him if ever the opportunity presents itself. Above all he is a very nice guy, someone who I feel is totally about doing a great job and creating a great software product above all.",
      source: 'linkedin',
      desi: 'Sales Guy',
      image: '/assets/soumya.jpg'}
  end

  def hash_value
    {name: [reco_1, reco_2, reco_3, reco_4, reco_5]}
  end
end