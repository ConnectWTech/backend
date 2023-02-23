/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {firstname:'caston', lastname:'teacher', username:'mister', email:'Ayo@gmail.com', password:'123', type_of:'engineer'},
    {firstname:'jowel', lastname:'teacher', username:'jowel', email:'Ayo@vf.com', password:'123', type_of:'engineer'},
    {firstname:'ann', lastname:'teacher', username:'ann', email:'Ayo@vvgf.com', password:'123', type_of:'engineer'},
    {firstname:'ana', lastname:'teacher', username:'ana', email:'Ayo@btgb.com', password:'123', type_of:'engineer'},
    {firstname:'anne', lastname:'teacher', username:'anne', email:'Ayo@bt.com', password:'123', type_of:'business'},
    {firstname:'Anaya', lastname:'lambright', username:'Anaya610', email:'Ayo@bte.com', password:'123', type_of:'business'},
    {firstname:'Shadia', lastname:'somthing', username:'sh', email:'Ayo@fer.com', password:'123', type_of:'business'},
    {firstname:'jose', lastname:'somthing', username:'jghg', email:'Ayo@fe.com', password:'123', type_of:'business'},
    {firstname:'shadman', lastname:'somthing', username:'hghtr', email:'Ayo@dwee.com', password:'123', type_of:'business'},
    {firstname:'easyname', lastname:'easy', username:'hrth', email:'Ayo@s.com', password:'123', type_of:'business'},
    {firstname:'mat', lastname:'maximus', username:'mistrtgher', email:'Ayo@gdwail.com', password:'123', type_of:'business'},
    {firstname:'max', lastname:'matius', username:'gret', email:'Ayo@gsqamail.com', password:'123', type_of:'business'},
    {firstname:'chopper', lastname:'Tony Tony', username:'Cutepup123', email:'Ayo@gmsdail.com', password:'123', type_of:'business'},
    {firstname:'chirs', lastname:'teacher', username:'dwd', email:'Ayo@sqsw.com', password:'123', type_of:'business'},
    {firstname:'cris', lastname:'teacher', username:'dwdef', email:'Ayo@gmasqzil.com', password:'123', type_of:'business'},
  ]);

  await knex('profile').del()
  await knex('profile').insert([
    {technologies:'python, java, javascript', bio:'i love to code and i am good at it, what more can you ask for!!! Hire me please ;}', photo:'url', userid:6},
    {technologies:'python, java, javascript', bio:'i love to code and i am good at it, what more can you ask for!!! Hire me please ;}', photo:'url', userid:7},
    {technologies:'python, java, javascript', bio:'i love to code and i am good at it, what more can you ask for!!! Hire me please ;}', photo:'url', userid:8},
    {technologies:'python, java, javascript', bio:'i love to code and i am good at it, what more can you ask for!!! Hire me please ;}', photo:'url', userid:9},
    {technologies:'python, java, javascript', bio:'i love to code and i am good at it, what more can you ask for!!! Hire me please ;}', photo:'url', userid:2},
    {technologies:'python, java, javascript', bio:'i love to code and i am good at it, what more can you ask for!!! Hire me please ;}', photo:'url', userid:5},
    {technologies:'python, java, javascript', bio:'i love to code and i am good at it, what more can you ask for!!! Hire me please ;}', photo:'url', userid:10},
    {technologies:'python, java, javascript', bio:'i love to code and i am good at it, what more can you ask for!!! Hire me please ;}', photo:'url', userid:12},
    {technologies:'python, java, javascript', bio:'i love to code and i am good at it, what more can you ask for!!! Hire me please ;}', photo:'url', userid:1},

  ]);
  await knex('posts').del()
  await knex('posts').insert([
    {title:'loving the project type of work!!!', hashtag:'blackgirls',technologies:'python, java, javascript', bio:'I loved my team, we worked so hard and made a great project togethor', photo:'url of a photo',url:'url', likes:200, userid:1},
    {title:'loving the project type of work!!!', hashtag:'blackgirls',technologies:'python, java, javascript', bio:'I loved my team, we worked so hard and made a great project togethor', photo:'url of a photo',url:'url', likes:200, userid:2},
    {title:'loving the project type of work!!!', hashtag:'blackgirls',technologies:'python, java, javascript', bio:'I loved my team, we worked so hard and made a great project togethor', photo:'url of a photo',url:'url', likes:200, userid:3},
    {title:'loving the project type of work!!!', hashtag:'blackgirls',technologies:'python, java, javascript', bio:'I loved my team, we worked so hard and made a great project togethor', photo:'url of a photo',url:'url', likes:200, userid:4},
    {title:'loving the project type of work!!!', hashtag:'blackgirls',technologies:'python, java, javascript', bio:'I loved my team, we worked so hard and made a great project togethor', photo:'url of a photo',url:'url', likes:200, userid:2},
    {title:'loving the project type of work!!!', hashtag:'blackgirls',technologies:'python, java, javascript', bio:'I loved my team, we worked so hard and made a great project togethor', photo:'url of a photo',url:'url', likes:200, userid:2},
    {title:'loving the project type of work!!!', hashtag:'blackgirls',technologies:'python, java, javascript', bio:'I loved my team, we worked so hard and made a great project togethor', photo:'url of a photo',url:'url', likes:200, userid:2},
    {title:'loving the project type of work!!!', hashtag:'blackgirls',technologies:'python, java, javascript', bio:'I loved my team, we worked so hard and made a great project togethor', photo:'url of a photo',url:'url', likes:200, userid:1},
    {title:'loving the project type of work!!!', hashtag:'blackgirls',technologies:'python, java, javascript', bio:'I loved my team, we worked so hard and made a great project togethor', photo:'url of a photo',url:'url', likes:200, userid:3},

  ]);
  await knex('comments').del()
  await knex('comments').insert([
    {text:'love all the hard work', likes:100, userid:2, postid:3},
    {text:'love all the hard work', likes:100, userid:2, postid:3},
    {text:'love all the hard work', likes:100, userid:2, postid:3},
    {text:'love all the hard work', likes:100, userid:2, postid:3},
    {text:'love all the hard work', likes:100, userid:4, postid:3},
    {text:'love all the hard work', likes:100, userid:5, postid:4},
    {text:'love all the hard work', likes:100, userid:6, postid:3},
    {text:'love all the hard work', likes:100, userid:2, postid:5},
    {text:'love all the hard work', likes:100, userid:5, postid:8},
    {text:'love all the hard work', likes:100, userid:2, postid:3},
  ]);
  
  await knex('job_post').del()
  await knex('job_post').insert([
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:6},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:6},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:6},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:6},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:6},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:6},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:7},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:8},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:9},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:6},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:5},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:8},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:7},
    {technologies:'python, java, javascript', bio:'we need a stong team for java', title:'looking for java enigneers', userid:6},

  ]);
  await knex('job_applied').del()
  await knex('job_applied').insert([
    {userid: 1, jobs_id: 1, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 4, jobs_id: 3, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 2, jobs_id: 4, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 3, jobs_id: 6, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 3, jobs_id: 5, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 3, jobs_id: 5, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 3, jobs_id: 5, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 3, jobs_id: 5, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 3, jobs_id: 5, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 3, jobs_id: 5, accepted_or_denied_or_waiting: 'waiting'},
    {userid: 3, jobs_id: 5, accepted_or_denied_or_waiting: 'waiting'},
  ]);
  await knex('following').del()
  await knex('following').insert([
    {userid:2, following_persons_id:3},
    {userid:2, following_persons_id:4},
    {userid:2, following_persons_id:5},
    {userid:2, following_persons_id:6},
    {userid:2, following_persons_id:8},
    {userid:2, following_persons_id:7},
    {userid:2, following_persons_id:1},
    {userid:2, following_persons_id:10},
    {userid:2, following_persons_id:9},
    {userid:3, following_persons_id:9},
    {userid:5, following_persons_id:4},
    {userid:6, following_persons_id:4},

  ]);
};


