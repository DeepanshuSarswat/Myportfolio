(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{148:function(e,a,t){},161:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),c=t(23),s=t.n(c),r=(t(148),t(96)),o=t(26),l=t(60),d=t(114),h=t.n(d),j=t(205),b=t(112),m=t.n(b),g=t(113),u=t.n(g),p=t(209),x=t(86),O=t.n(x),f=t(211),w=t(210),v=t(212),y=t(207),N=t(226),S=t(7),k=Object(j.a)({home:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#1F2937"},root:{width:250,backgroundColor:"#212121"},media:{height:70,borderRadius:"50%",paddingTop:"56.25%",border:"6px solid white",margin:10},text:{textAlign:"center",fontWeight:700,fontSize:23,color:"white"},center:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},word:{fontSize:15,textAlign:"center",color:"white"},cardaction:{display:"flex",justifyContent:"space-between",alignItems:"center"},content:{padding:12},buttoncolor:{color:"#BE185D"}});function B(){var e=k();return Object(S.jsx)(N.a,{className:e.center,children:Object(S.jsx)(N.a,{children:Object(S.jsxs)(y.a,{className:e.root,elevation:0,children:[Object(S.jsx)(p.a,{elevation:7,className:e.media,image:"https://media-exp2.licdn.com/dms/image/C4D03AQFSdKayVZCMTw/profile-displayphoto-shrink_800_800/0/1654419275874?e=1660780800&v=beta&t=pgKCgiMpQxnwTq_a-HwFzQAeGdzjktMy1MGMOFRwoJE",title:"Deepanshu Sarswat"}),Object(S.jsxs)(w.a,{className:e.content,children:[Object(S.jsx)(l.a,{variant:"h6",component:"p",className:e.text,gutterBottom:!0,children:"Deepanshu Sarswat"}),Object(S.jsx)(l.a,{className:e.word,color:"textSecondary",children:"I'm a Front End Web Developer"})]}),Object(S.jsxs)(f.a,{disableSpacing:!0,className:e.cardaction,children:[Object(S.jsx)("a",{href:"https://www.linkedin.com/in/deepanshu-sarswat-b356121a6/",children:Object(S.jsx)(v.a,{children:Object(S.jsx)(m.a,{className:e.buttoncolor})})}),Object(S.jsx)("a",{href:"https://github.com/DeepanshuSarswat",children:Object(S.jsx)(v.a,{children:Object(S.jsx)(O.a,{className:e.buttoncolor})})}),Object(S.jsx)("a",{href:"https://www.instagram.com/1deepanshu.saraswat/",children:Object(S.jsx)(v.a,{children:Object(S.jsx)(u.a,{className:e.buttoncolor})})}),Object(S.jsx)("a",{href:"https://twitter.com/DeepanshuSarsw4",children:Object(S.jsx)(v.a,{children:Object(S.jsx)(h.a,{className:e.buttoncolor})})})]})]})})})}function C(){return Object(S.jsx)("div",{children:Object(S.jsx)(B,{})})}var I=t(19),M=t(216),D=t(213),W=t(133),A=t(116),F=t.n(A),L=t(117),T=t.n(L),z=t(118),P=t.n(z),R=t(55),E=t.n(R),K=t(225),G=t(215),q=t(115),H=t.n(q),J=t(95),Q=(t(155),t(162),t(158),t(159),t(94),J.a.initializeApp({apiKey:"AIzaSyCZop_aYUMwVlK_F4hqLYLqx29fQSKNmRY",authDomain:"myportfollio-4f6ea.firebaseapp.com",projectId:"myportfollio-4f6ea",storageBucket:"myportfollio-4f6ea.appspot.com",messagingSenderId:"368326008962",appId:"1:368326008962:web:9aeb2bb03ccc7818b7d49b",measurementId:"G-PVL3JKBKQ7"}).firestore()),U=Object(j.a)({button:{marginBottom:60},textFeild:{marginTop:20,marginBottom:20,display:"block"},bgcolor:{background:"#424242",borderRadius:5,outline:"none",color:"white"},input:{color:"white"}}),V=function(){var e=U(),a=Object(n.useState)(""),t=Object(I.a)(a,2),i=t[0],c=t[1],s=Object(n.useState)(""),r=Object(I.a)(s,2),o=r[0],l=r[1],d=Object(n.useState)(""),h=Object(I.a)(d,2),j=h[0],b=h[1],m=Object(n.useState)(""),g=Object(I.a)(m,2),u=g[0],p=g[1],x=Object(n.useState)(!1),O=Object(I.a)(x,2),f=O[0],w=O[1];return Object(S.jsx)(N.a,{children:Object(S.jsxs)("form",{id:"my-form",onSubmit:function(e){e.preventDefault(),Q.collection("Data").add({name:i,email:o,subject:j,msg:u}),c(""),l(""),b(""),p(""),w(!0)},children:[Object(S.jsxs)(N.a,{className:e.textFeild,children:[Object(S.jsxs)(D.a,{container:!0,spacing:3,children:[Object(S.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(K.a,{value:i,name:"name",onChange:function(e){return c(e.target.value)},inputProps:{className:e.input},id:"outlined-basic",label:"Name",variant:"outlined",fullWidth:!0,required:!0,className:e.bgcolor})}),Object(S.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(K.a,{onChange:function(e){return l(e.target.value)},value:o,type:"email",name:"email",inputProps:{className:e.input},id:"outlined-basic",color:"textSecondary",label:"Email",variant:"outlined",fullWidth:!0,required:!0,className:e.bgcolor})}),Object(S.jsx)(D.a,{item:!0,xs:12,md:12,children:Object(S.jsx)(K.a,{onChange:function(e){return b(e.target.value)},value:j,name:"subject",inputProps:{className:e.input},id:"outlined-basic",label:"Subject",variant:"outlined",fullWidth:!0,required:!0,className:e.bgcolor})}),Object(S.jsx)(D.a,{item:!0,xs:12,md:12,children:Object(S.jsx)(K.a,{value:u,onChange:function(e){return p(e.target.value)},id:"outlined-basic",name:"msg",label:"Your Message",variant:"outlined",fullWidth:!0,required:!0,inputProps:{className:e.input},multiline:!0,rows:6,className:e.bgcolor})})]}),f&&Object(S.jsx)("p",{id:"status",children:"*Your message has been sent"})]}),Object(S.jsx)(G.a,{size:"large",type:"submit",variant:"contained",color:"primary",className:e.button,endIcon:Object(S.jsx)(H.a,{}),children:"Send Message"})]})})},Y=Object(j.a)({mr:{marginRight:5},padding:{paddingTop:20,paddingBottom:20,paddingRight:15,paddingLeft:15,display:"flex",justifyContent:"center",alignItems:"center",background:"#424242"},display:{display:"flex",justifyContent:"center",alignItems:"center"},center:{textAlign:"center",color:"white"},centere:{textAlign:"center",marginBottom:9,fontSize:20,color:"#BE185D"},heading:{paddingTop:100,paddingBottom:40},headingicon:{fontSize:60,marginLeft:-5},headingname:{marginBottom:-20,fontWeight:500,color:"white"},round:{borderRadius:20},centers:{height:"100vh"}});function _(){var e=Y(),a=Object(n.useState)([{icon:Object(S.jsx)(F.a,{}),text:"Mobile",textdata:"8005542704"},{icon:Object(S.jsx)(T.a,{}),text:"Address",textdata:"Noka Bikaner Rajasthan, Bharat "},{icon:Object(S.jsx)(P.a,{}),text:"E-mail",textdata:"sarswatdeepanshu@gmail.com"}]),t=Object(I.a)(a,2),i=t[0];t[1];return Object(S.jsx)(N.a,{className:e.centers,children:Object(S.jsxs)(M.a,{children:[Object(S.jsxs)(N.a,{className:e.heading,children:[Object(S.jsx)(l.a,{variant:"h4",fontWeight:"200",className:e.headingname,children:"Let's Talk"}),Object(S.jsx)(N.a,{children:Object(S.jsx)(E.a,{className:e.headingicon,color:"primary"})})]}),Object(S.jsx)(D.a,{container:!0,spacing:3,children:i.map((function(a){return Object(S.jsx)(D.a,{item:!0,xs:12,md:4,children:Object(S.jsx)(W.a,{elevation:6,children:Object(S.jsx)(N.a,{className:e.padding,children:Object(S.jsxs)(N.a,{children:[Object(S.jsx)(N.a,{component:"span",display:"block",className:e.centere,children:a.icon}),Object(S.jsx)(l.a,{className:e.center,gutterBottom:!0,children:Object(S.jsx)("strong",{children:a.text})}),Object(S.jsx)(l.a,{className:e.center,gutterBottom:!0,children:a.textdata})]})})})})}))}),Object(S.jsx)(V,{})]})})}var Z=t(6),X=t(217),$=t(119),ee=t.n($),ae=t(11),te=t(218),ne=t(229),ie=t(120),ce=t.n(ie),se=Object(j.a)({avatar:{backgroundColor:"#212121"},media:{height:0,paddingTop:"56.25%"},bgcolor:{background:"#424242"},title:{color:"white",fontWeight:600},whtcolor:{color:"white"},righbutton:{marginLeft:20}}),re=function(e){var a=e.cardata,t=se(),n=i.a.useState(!1),c=Object(I.a)(n,2),s=c[0],r=c[1];return Object(S.jsx)(N.a,{children:Object(S.jsxs)(y.a,{className:t.bgcolor,children:[Object(S.jsx)(X.a,{avatar:Object(S.jsx)(ne.a,{"aria-label":"recipe",className:t.avatar,children:a.heading[0]}),title:a.heading,className:t.title}),Object(S.jsx)(p.a,{className:t.media,image:a.image,title:"Deepanshu Sarswat"}),Object(S.jsx)(f.a,{disableSpacing:!0,children:Object(S.jsx)(v.a,{className:Object(ae.a)(t.expand,Object(Z.a)({},t.expandOpen,s)),onClick:function(){r(!s)},"aria-expanded":s,"aria-label":"show more",children:Object(S.jsx)(ee.a,{className:t.whtcolor})})}),Object(S.jsx)(te.a,{in:s,timeout:"auto",unmountOnExit:!0,className:t.whtcolor,children:Object(S.jsxs)(w.a,{children:[Object(S.jsx)(l.a,{paragraph:!0,children:"Project Description :"}),Object(S.jsx)(l.a,{paragraph:!0,children:a.text}),Object(S.jsxs)(l.a,{paragraph:!0,children:[Object(S.jsx)("a",{href:a.livelink,className:"LiveProject",children:Object(S.jsx)(G.a,{color:"primary",variant:"contained",startIcon:Object(S.jsx)(ce.a,{}),children:"Live"})}),Object(S.jsx)("a",{href:a.Sourcelink,className:"LiveProject",children:Object(S.jsx)(G.a,{color:"primary",variant:"contained",className:t.righbutton,startIcon:Object(S.jsx)(O.a,{}),children:"Code"})})]})]})})]})})},oe=Object(j.a)({headingicon:{fontSize:60,marginLeft:-5},headingname:{marginBottom:-20,fontWeight:500,color:"white"},heading:{paddingTop:100,paddingBottom:40},marginBotm:{paddingBottom:30},center:{height:"100vh"}});function le(){var e=oe(),a=Object(n.useState)([{heading:"Profit King",image:"https://www.finsmes.com/wp-content/uploads/2019/04/trading.jpg",text:'I have tried to emulate a fully-fledged equity trading platform "PROFIT KING" where Front-end was handled by me and Backend by My Friend.\n      We can trade in equity of a particular stock in American Markets where we can analyse its fundamentals based on its quaterly and yearly results.',livelink:"http://profitking.herokuapp.com/",Sourcelink:"https://github.com/DeepanshuSarswat/ProFitKing_Updated"},{heading:"Gmail Clone",image:"https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97",text:"Hello folks \ud83d\ude03 ,\n      I made Gmail clone using #Reactjs , #Mui , and #Firebase .\n      I have tried that it should have the functionality of Gmail, as well as add some additional functionality to it.\n      In this I have also added the functionality of Darkmode and the functionality of Short Mail. as shown in the video below \ud83d\udc47\ud83c\udffb.",livelink:"https://d-note-c4650.web.app/",Sourcelink:"https://github.com/DeepanshuSarswat/supermail"},{heading:"Linkedin Clone",image:"https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkaW58ZW58MHx8MHx8&w=1000&q=80",text:"Hello folks \ud83d\ude03 ,\n      I made Linkedin clone using #Reactjs , #Mui , and #Firebase .\n      I have tried that it should have the functionality of Linkedin as well as add some additional functionality to it.\n      In this I have also added the functionality of Darkmode and the functionality.\n      in this we can share imgaes , videos , files as a post.\n      Also it has Signin and Signout functionality .\n      I have tried that its user interface is simple and beautiful.",livelink:"https://linkdin-clone-791e8.web.app/",Sourcelink:"https://github.com/DeepanshuSarswat/Linkdin-clone"},{heading:"Amazon Clone",image:"https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg",text:"\n      Hello folks \ud83d\ude03 ,\n      I made Amazon clone using #Reactjs , #Mui , and #Firebase .\n      I have tried that it should have the functionality of Amazon as well as add some additional functionality to it.\n      I have tried that its user interface is simple and beautiful.\n      ",livelink:"https://e-d9642.web.app/",Sourcelink:"https://github.com/DeepanshuSarswat/supermail"}]),t=Object(I.a)(a,2),i=t[0];t[1];return Object(S.jsx)(M.a,{children:Object(S.jsxs)(N.a,{className:e.center,children:[Object(S.jsxs)(N.a,{className:e.heading,children:[Object(S.jsx)(N.a,{children:Object(S.jsx)(l.a,{variant:"h4",fontWeight:"200",className:e.headingname,children:"Projects"})}),Object(S.jsx)(N.a,{children:Object(S.jsx)(E.a,{className:e.headingicon,color:"primary"})})]}),Object(S.jsx)(N.a,{className:e.marginBotm,children:Object(S.jsx)(D.a,{container:!0,spacing:3,children:i.map((function(e){return Object(S.jsx)(D.a,{item:!0,xs:12,md:4,children:Object(S.jsx)(W.a,{children:Object(S.jsx)(N.a,{children:Object(S.jsx)(re,{cardata:e})})})})}))})})]})})}var de=Object(j.a)({clgname:{fontSize:20,fontWeight:500},date:{fontSize:13,textAlign:"right"},padding1:{padding:20,backgroundColor:"#212121",color:"white"}}),he=function(){var e=de(),a=Object(n.useState)([{date:" May-2023",names:"Shri Mata Vaishno Devi University, Katra, J&K",branch:"B.Tech in Computer Science",gpa:"CGPA:- 7.23"},{date:" May-2017",names:"Bhagwan Mahaveer Sr. Sec.School, Nokha",branch:"Senior Secondary Education",gpa:"Percentage:- 79.60"}]),t=Object(I.a)(a,2),i=t[0];t[1];return Object(S.jsx)("div",{children:i.map((function(a){return Object(S.jsx)(N.a,{children:Object(S.jsx)(D.a,{container:!0,spacing:5,children:Object(S.jsx)(D.a,{item:!0,xs:12,md:12,children:Object(S.jsxs)(W.a,{className:e.padding1,elevation:5,children:[Object(S.jsx)(l.a,{className:e.date,gutterBottom:!0,children:a.date}),Object(S.jsx)(l.a,{variant:"h4",className:e.clgname,gutterBottom:!0,children:a.names}),Object(S.jsx)(l.a,{gutterBottom:!0,children:a.branch}),Object(S.jsx)(l.a,{gutterBottom:!0,children:a.gpa})]})})})})}))})},je=Object(j.a)({boxx:{marginTop:80},boxxx:{marginTop:60},heading:{marginTop:20},headingicon:{fontSize:60,marginLeft:-5},headingname:{marginBottom:-20,fontWeight:500,color:"white"},padding:{padding:20,textAlign:"center",background:"#424242"},padding1:{padding:20,background:"#424242"},bgcolorchild:{backgroundColor:"#212121",padding:20,textAlign:"center",color:"white"}}),be=function(){var e=je();return Object(S.jsx)(N.a,{className:e.boxx,children:Object(S.jsxs)(D.a,{container:!0,spacing:6,children:[Object(S.jsxs)(D.a,{item:!0,xs:12,md:6,children:[Object(S.jsxs)(N.a,{className:e.heading,children:[Object(S.jsx)(l.a,{variant:"h4",fontWeight:"200",className:e.headingname,children:"Skills"}),Object(S.jsx)(N.a,{children:Object(S.jsx)(E.a,{className:e.headingicon,color:"primary"})})]}),Object(S.jsx)(N.a,{children:Object(S.jsxs)(W.a,{className:e.padding,elevation:3,children:[Object(S.jsx)(D.a,{container:!0,spacing:4,children:["ReactJs","HTML","CSS","SaSS","Redux"].map((function(a){return Object(S.jsx)(D.a,{item:!0,xs:6,md:3,children:Object(S.jsx)(W.a,{className:e.bgcolorchild,elevation:5,children:a})})}))}),Object(S.jsx)(D.a,{container:!0,spacing:4,children:["JavaScript","Bootstrap","Tailwind CSS","Git/Github","Material-Ui",,"TypeScript","Firebase","React Query"].map((function(a){return Object(S.jsx)(D.a,{item:!0,xs:12,md:4,children:Object(S.jsx)(W.a,{className:e.bgcolorchild,elevation:5,children:a})})}))})]})})]}),Object(S.jsxs)(D.a,{item:!0,xs:12,md:6,children:[Object(S.jsxs)(N.a,{className:e.heading,children:[Object(S.jsx)(l.a,{variant:"h4",fontWeight:"200",className:e.headingname,children:"Education"}),Object(S.jsx)(N.a,{children:Object(S.jsx)(E.a,{className:e.headingicon,color:"primary"})})]}),Object(S.jsx)(W.a,{className:e.padding1,children:Object(S.jsx)(he,{})})]})]})})},me=Object(j.a)({heading:{paddingTop:100,paddingBottom:40},headingicon:{fontSize:60,marginLeft:-5},headingname:{marginBottom:-20,fontWeight:500,color:"white"},display:{display:"inline",color:"white"},display1:{display:"inline",color:"#BE185D"},nicemeet:{marginBottom:20},color:{color:"white"},wraper:{backgroundColor:"#212121",height:"100vh"}});function ge(){var e=me();return Object(S.jsx)(N.a,{className:e.wraper,children:Object(S.jsxs)(M.a,{children:[Object(S.jsxs)(N.a,{className:e.heading,children:[Object(S.jsx)(l.a,{variant:"h4",fontWeight:"200",className:e.headingname,children:"About Me"}),Object(S.jsx)(N.a,{children:Object(S.jsx)(E.a,{className:e.headingicon,color:"primary"})})]}),Object(S.jsxs)(N.a,{className:e.hello,children:[Object(S.jsx)(N.a,{className:e.nicemeet,children:Object(S.jsxs)(l.a,{variant:"h3",className:e.display,gutterBottom:!0,children:["Hi, I\u2019m Deepanshu."," ",Object(S.jsx)(l.a,{variant:"h3",className:e.display1,children:"Nice to meet you."})]})}),Object(S.jsxs)(l.a,{variant:"body1",gutterBottom:!0,className:e.color,children:["Hello \ud83d\udc4b! I am ",Object(S.jsx)("strong",{children:"Deepanshu Sarswat"}),", currently Third year computer science undergraduate student at Shri Mata Vaishno Devi University, Katra, Jammu. I am working as a"," ",Object(S.jsx)("strong",{children:"Front End Web Developer"}),". I enjoy building everything from small sites and landing pages to rich interactive web apps. I love creating visually stunning and responsive websites. I always try to combine aesthetic with functional aspects, looking for the right balance to communicate without annoying."]}),Object(S.jsxs)(l.a,{variant:"body1",gutterBottom:!0,className:e.color,children:["I enjoy the collaborative nature of working with a team on building a product. The feedback, discussion, and review in this environment brings out the best in each individual member, and is a crucial component in our own personal development.",Object(S.jsx)("strong",{children:" I'm ready to jump"})," onto a supportive team and begin contributing. I also enjoy programming and the coding world and conducted various programming and open-source related events in my University."]})]}),Object(S.jsx)(N.a,{children:Object(S.jsx)(be,{})})]})})}var ue=t(121),pe=t(41),xe=t(228),Oe=t(214),fe=t(221),we=t(222),ve=t(223),ye=t(127),Ne=t.n(ye),Se=t(128),ke=t.n(Se),Be=t(122),Ce=t.n(Be),Ie=t(123),Me=t.n(Ie),De=t(219),We=t(220),Ae=t(126),Fe=t.n(Ae),Le=t(124),Te=t.n(Le),ze=t(125),Pe=t.n(ze),Re=240,Ee=Object(j.a)((function(e){var a;return a={pages:{width:"100%"},root:{display:"flex",justifyContent:"center"},drawer:{width:Re,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:Re,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen,backgroundColor:"#424242"})},appBarShift:{marginLeft:Re,width:"calc(100% - ".concat(Re,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},listbgc:{backgroundColor:"#424242",height:"100%"},colorwht:{color:"white"},active:{backgroundColor:"#212121"}},Object(Z.a)(a,"root",{display:"flex"}),Object(Z.a)(a,"appBar",{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}),Object(Z.a)(a,"appBarShift",{marginLeft:Re,width:"calc(100% - ".concat(Re,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}),Object(Z.a)(a,"menuButton",{marginRight:36}),Object(Z.a)(a,"hide",{display:"none"}),Object(Z.a)(a,"drawer",{width:Re,flexShrink:0,whiteSpace:"nowrap"}),Object(Z.a)(a,"drawerOpen",{background:"#424242",width:Re,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}),Object(Z.a)(a,"drawerClose",Object(Z.a)({background:"#424242",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1})),Object(Z.a)(a,"toolbar",Object(ue.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)),Object(Z.a)(a,"content",{flexGrow:1,padding:e.spacing(3)}),a})),Ke=function(e){var a,t,n=e.children,c=Ee(),s=Object(pe.a)(),r=i.a.useState(!1),d=Object(I.a)(r,2),h=d[0],j=d[1],b=Object(o.f)(),m=Object(o.g)(),g=[{text:"Home",icon:Object(S.jsx)(Ce.a,{className:c.colorwht}),path:"/"},{text:"Projects",icon:Object(S.jsx)(Me.a,{className:c.colorwht}),path:"/project"},{text:"About Me",icon:Object(S.jsx)(Te.a,{className:c.colorwht}),path:"/about"},{text:"Contact Me",icon:Object(S.jsx)(Pe.a,{className:c.colorwht}),path:"/contact"}];return Object(S.jsxs)("div",{className:c.root,children:[Object(S.jsx)(De.a,{position:"fixed",className:Object(ae.a)(c.appBar,Object(Z.a)({},c.appBarShift,h)),children:Object(S.jsxs)(We.a,{children:[Object(S.jsx)(v.a,{color:"inherit","aria-label":"open drawer",onClick:function(){j(!0)},edge:"start",className:Object(ae.a)(c.menuButton,Object(Z.a)({},c.hide,h)),children:Object(S.jsx)(Fe.a,{})}),Object(S.jsx)(l.a,{variant:"h6",noWrap:!0,children:"Deepanshu Sarswat"})]})}),Object(S.jsxs)(xe.a,{variant:"permanent",className:Object(ae.a)(c.drawer,(a={},Object(Z.a)(a,c.drawerOpen,h),Object(Z.a)(a,c.drawerClose,!h),a)),classes:{paper:Object(ae.a)((t={},Object(Z.a)(t,c.drawerOpen,h),Object(Z.a)(t,c.drawerClose,!h),t))},children:[Object(S.jsx)("div",{className:c.toolbar,children:Object(S.jsx)(v.a,{onClick:function(){j(!1)},children:"rtl"===s.direction?Object(S.jsx)(Ne.a,{className:c.colorwht}):Object(S.jsx)(ke.a,{className:c.colorwht})})}),Object(S.jsx)(Oe.a,{className:c.listbgc,children:g.map((function(e){return Object(S.jsxs)(fe.a,{button:!0,onClick:function(){return b.push(e.path)},className:e.path===m.pathname?c.active:null,children:[Object(S.jsxs)(we.a,{children:[" ",e.icon]}),Object(S.jsx)(ve.a,{primary:e.text,className:c.colorwht})]},e)}))})]}),Object(S.jsx)("div",{className:c.pages,children:n})]})},Ge=t(129),qe=t(230),He=t(224),Je=Object(Ge.a)({palette:{primary:{main:"#BE185D"}}});Je=Object(qe.a)(Je);var Qe=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(He.a,{theme:Je,children:Object(S.jsx)(r.a,{children:Object(S.jsx)(Ke,{children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{exact:!0,path:"/",children:Object(S.jsx)(C,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/contact",children:Object(S.jsx)(_,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/project",children:Object(S.jsx)(le,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/about",children:Object(S.jsx)(ge,{})})]})})})})})},Ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,232)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(Qe,{})}),document.getElementById("root")),Ue()}},[[161,1,2]]]);
//# sourceMappingURL=main.8a055ab8.chunk.js.map