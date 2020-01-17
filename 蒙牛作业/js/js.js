
		
			window.onload = function() 
			{//window
				var navdiv=document.getElementsByClassName("navdiv")[0]; //获取导航条的每个小圆点
				var imglist =document.getElementsByClassName("imglist")[0];
				var circle=navdiv.children;
				var page1=document.getElementsByClassName("page")[0];
				page1.style.overflow="hidden";
				var btn=document.getElementsByTagName("li");
				var page=document.getElementsByClassName("page");
				/*点击导航栏切换页面*/
				page[0].style.display="block";
				for(var i=0;i<page.length;i++){
					btn[i].index = i;
					btn[i].onclick = function(){
						for (var i =0;i<page.length;i++){
							page[i].style.display="none";
						}/*for*/
					page[this.index].style.display="block";	
					}/*onclick*/
				}/*for-->*/
				/*点击原点切换图片*/
				for (var i = 0;i<circle.length;i++)
				{
					circle[i].index = i;//为每一个链接添加一个index属性
					circle[i].onclick=function()
					{
						var num=this.index;
						var cha=imglist.offsetTop+640*num;//-1280+640点的按钮在现在的前面<0
						var speed=0;
						var timer=null;	
						clearInterval(timer);
							timer=setInterval(function(){
								
                                if(cha<0)
						        {
							       speed=10;
								}
								else if(cha>0)
						        {
							       speed=-10;
								}
								else
								{
									speed=0;
								}
								   imglist.style.top=imglist.offsetTop+speed+"px";
							       if(imglist.offsetTop==-640*num)
							       {
							            clearInterval(timer);
							       } 
							},10);
					}//切换图片的onclick
				}//切换图片的for
				
				
				//导航栏图标变化
				/*var first=document.getElementsByClassName("first")[0];
				var firstimg=document.getElementsByClassName("firstimg")[0];*/
				var first=document.querySelector(".first");
				var firstimg=document.querySelector(".firstimg");
				first.onmouseover=function()
				{
					    firstimg.src="page1/t11.png";
				
				}
				first.onmouseout=function()
				{
					    firstimg.src="page1/t1.png";
				}
				
				
				
				/*微信照片明暗的变化*/
				var weixin=document.querySelectorAll(".weixin");
				var weixinimg=document.querySelectorAll(".weixinimg");
				var weixinbottom=document.querySelectorAll(".weixinbottom");
				var weibo=document.querySelectorAll(".weibo");
				var weiboimg=document.querySelectorAll(".weiboimg");
				var weibobottom=document.querySelectorAll(".weibobottom");
				var foottext1=document.querySelectorAll(".foottext1");
				var foottext2=document.querySelectorAll(".foottext2");
				var foottext3=document.querySelectorAll(".foottext3");
				var foottext4=document.querySelectorAll(".foottext4");
				var foottext5=document.querySelectorAll(".foottext5");
				var foottext6=document.querySelectorAll(".foottext6");
				var foottext7=document.querySelectorAll(".foottext7");
				var foottext10=document.querySelectorAll(".foottext10");
			for(i=0;i<weixin.length;i++)
			{
				weixin[i].onmouseover=function()
				{
					for(i=0;i<weixin.length;i++)
					{
					    weixinimg[i].src="foot/xin2.png";
						weixinbottom[i].style.color="#ffffff";
						startMove100(100);
					}
				};
				weibo[i].onmouseover=function()
				{
					for(i=0;i<weibo.length;i++)
					{
					    weiboimg[i].src="foot/weibo2.png";
						weibobottom[i].style.color="#ffffff";
						startMove100(0);
					}
				};
				foottext1[i].onmouseover=function()
				{
					for(i=0;i<foottext1.length;i++)
					{
						foottext1[i].style.color="#ffffff";
					}
				};
				foottext2[i].onmouseover=function()
				{
					for(i=0;i<foottext2.length;i++)
					{
						foottext2[i].style.color="#ffffff";
					}
				};
				foottext3[i].onmouseover=function()
				{
					for(i=0;i<foottext3.length;i++)
					{
						foottext3[i].style.color="#ffffff";
					}
				};
				foottext4[i].onmouseover=function()
				{
					for(i=0;i<foottext4.length;i++)
					{
						foottext4[i].style.color="#ffffff";
					}
				};
				foottext5[i].onmouseover=function()
				{
					for(i=0;i<foottext5.length;i++)
					{
						foottext5[i].style.color="#ffffff";
					}
				};
				foottext6[i].onmouseover=function()
				{
					for(i=0;i<foottext6.length;i++)
					{
						foottext6[i].style.color="#ffffff";
					}
				};
				foottext7[i].onmouseover=function()
				{
					for(i=0;i<foottext7.length;i++)
					{
						foottext7[i].style.color="#ffffff";
					}
				};
				foottext10[i].onmouseover=function()
				{
					for(i=0;i<foottext10.length;i++)
					{
						foottext10[i].style.color="#ffffff";
					}
				};
				
			}
			for(i=0;i<weixin.length;i++)
			{
				weixin[i].onmouseout=function()
				{
					for(i=0;i<weixin.length;i++)
					{
					    weixinimg[i].src="foot/xin1.png";
						weixinbottom[i].style.color="#E3DCFF";
					}
				};
				weibo[i].onmouseout=function()
				{
					for(i=0;i<weibo.length;i++)
					{
					    weiboimg[i].src="foot/weibo1.png";
						weibobottom[i].style.color="#E3DCFF";
					}
				};
				foottext1[i].onmouseout=function()
				{
					for(i=0;i<foottext1.length;i++)
					{
						foottext1[i].style.color="#E3DCFF";
					}
				};
				foottext2[i].onmouseout=function()
				{
					for(i=0;i<foottext2.length;i++)
					{
						foottext2[i].style.color="#E3DCFF";
					}
				};
				foottext3[i].onmouseout=function()
				{
					for(i=0;i<foottext3.length;i++)
					{
						foottext3[i].style.color="#E3DCFF";
					}
				};
				foottext4[i].onmouseout=function()
				{
					for(i=0;i<foottext4.length;i++)
					{
						foottext4[i].style.color="#E3DCFF";
					}
				};
				foottext5[i].onmouseout=function()
				{
					for(i=0;i<foottext5.length;i++)
					{
						foottext5[i].style.color="#E3DCFF";
					}
				};
				foottext6[i].onmouseout=function()
				{
					for(i=0;i<foottext6.length;i++)
					{
						foottext6[i].style.color="#E3DCFF";
					}
				};
				foottext7[i].onmouseout=function()
				{
					for(i=0;i<foottext7.length;i++)
					{
						foottext7[i].style.color="#E3DCFF";
					}
				};
				foottext10[i].onmouseout=function()
				{
					for(i=0;i<foottext10.length;i++)
					{
						foottext10[i].style.color="#E3DCFF";
					}
				};
			}
				
			
		var boxes=document.getElementsByClassName("boxes")[0];
		boxes.onmouseover=function()
		{
			startMove1(100);//暗
			
		}
		 boxes.onmouseout=function()
		{
			startMove1(50);//亮
		}
		//第二页第一个盒子
		var box1=document.getElementsByClassName("box1")[0];
		var boximg1=document.getElementsByClassName("boximg1")[0];
		box1.onmouseover=function()
		{
			boximg1.style.transform="scale(1.1)";
			onchange1();
		}
		box1.onmouseout=function()
		{
			boximg1.style.transform="scale(1)";
			onchange2();
		}
	    var box1btn=document.getElementsByClassName("box1btn")[0];
		function onchange1()
		{
			box1btn.style.color="#F39E38";
			box1btn.style.backgroundColor="white";
		}
		function onchange2()
		{
			box1btn.style.color="#ffffff";
			box1btn.style.backgroundColor="#F39E38";
		}

		//第二页第二个盒子
		var box2=document.getElementsByClassName("box2")[0];
		var boximg2=document.getElementsByClassName("boximg2")[0];
		box2.onmouseover=function()
		{
			boximg2.style.transform="scale(1.1)";
			onchange3();
		}
		box2.onmouseout=function()
		{
			boximg2.style.transform="scale(1)";
			onchange4();
		}
	    var box2btn=document.getElementsByClassName("box2btn")[0];
		function onchange3()
		{
			box2btn.style.color="#EB6B64";
			box2btn.style.backgroundColor="white";
		}
		function onchange4()
		{
			box2btn.style.color="#ffffff";
			box2btn.style.backgroundColor="#EB6B64";
		}
        
		//第二页第三个盒子
        var box3=document.getElementsByClassName("box3")[0];
		var boximg3=document.getElementsByClassName("boximg3")[0];
		box3.onmouseover=function()
		{
			boximg3.style.transform="scale(1.1)";
			onchange5();
		}
		box3.onmouseout=function()
		{
			boximg3.style.transform="scale(1)";
			onchange6();
		}
	    var box3btn=document.getElementsByClassName("box3btn")[0];
		function onchange5()
		{
			box3btn.style.color="#71BDE4";
			box3btn.style.backgroundColor="white";
		}
		function onchange6()
		{
			box3btn.style.color="#ffffff";
			box3btn.style.backgroundColor="#71BDE4";
		}
         
		 //第二页第四个盒子
		var box4=document.getElementsByClassName("box4")[0];
		var boximg4=document.getElementsByClassName("boximg4")[0];
		box4.onmouseover=function()
		{
			boximg4.style.transform="scale(1.1)";
			onchange7();
		}
		box4.onmouseout=function()
		{
			boximg4.style.transform="scale(1)";
			onchange8();
		}
	    var box4btn=document.getElementsByClassName("box4btn")[0];
		function onchange7()
		{
			box4btn.style.color="#81C043";
			box4btn.style.backgroundColor="white";
		}
		function onchange8()
		{
			box4btn.style.color="#ffffff";
			box4btn.style.backgroundColor="#81C043";
		}
	    
		//第三页放大图片
		var page3img1=document.getElementsByClassName("page3img1")[0];
		var page3img4=document.getElementsByClassName("page3img4")[0];
		var page3toprighttext=document.getElementsByClassName("page3toprighttext")[0];
	    page3toprighttext.onmouseover=page3img4.onmouseover=page3img1.onmouseover=function()
	    {
	    	page3img1.style.transform="scale(1.4)";
			page3img4.style.transform="scale(0.9)";
	    }
	    page3toprighttext.onmouseout=page3img4.onmouseout=page3img1.onmouseout=function()
	    {
			page3img1.style.transform="scale(1)";
			page3img4.style.transform="scale(1)";
	    }
		var page3toplefttext=document.getElementsByClassName("page3toplefttext")[0];
		var page3img3=document.getElementsByClassName("page3img3")[0];
		var page3img2=document.getElementsByClassName("page3img2")[0];
		page3toplefttext.onmouseover=page3img3.onmouseover=page3img2.onmouseover=function()
		 {
		 	page3img2.style.transform="scale(1.4)";
		 	page3img3.style.transform="scale(0.9)";
		 }
		page3toplefttext.onmouseout=page3img3.onmouseout=page3img2.onmouseout=function()
		 {
		 	page3img2.style.transform="scale(1)";
		 	page3img3.style.transform="scale(1)";
		 }             //836   633
		 //第五页放大图片
		 var page5topleft=document.getElementsByClassName("page5topleft")[0];
		 var page5img2=document.getElementsByClassName("page5img2")[0];
		 var page5img1=document.getElementsByClassName("page5img1")[0];
		 page5topleft.onmouseover=page5img1.onmouseover=page5img2.onmouseover=function()
		  {
		  	page5img1.style.transform="scale(1.4)";
		  	page5img2.style.transform="scale(0.9)";
		  }
		 page5topleft.onmouseout=page5img1.onmouseout=page5img2.onmouseout=function()
		  {
		  	page5img1.style.transform="scale(1)";
		  	page5img2.style.transform="scale(1)";
		  }
		  var page5bottomright=document.getElementsByClassName("page5bottomright")[0];
		  var page5img3=document.getElementsByClassName("page5img3")[0];
		  var page5img4=document.getElementsByClassName("page5img4")[0];
		  page5bottomright.onmouseover=page5img3.onmouseover=page5img4.onmouseover=function()
		   {
		   	page5img3.style.transform="scale(1.4)";
		   	page5img4.style.transform="scale(0.9)";
		   }
		  page5bottomright.onmouseout=page5img3.onmouseout=page5img4.onmouseout=function()
		   {
		   	page5img3.style.transform="scale(1)";
		   	page5img4.style.transform="scale(1)";
		   }
		   
		   var page5toplefttextbtn=document.getElementsByClassName("page5toplefttextbtn")[0];
		   page5toplefttextbtn.onmouseover=function()
		   {
			   page5toplefttextbtn.style.backgroundColor="#ffffff";
			   page5toplefttextbtn.style.color="#D58067";
		   }
		    page5toplefttextbtn.onmouseout=function()
		   {
		   			   page5toplefttextbtn.style.backgroundColor="#D58067";
		   			   page5toplefttextbtn.style.color="#ffffff";
		   }
		   var page5bottomrighttextbtn=document.getElementsByClassName("page5bottomrighttextbtn")[0];
		   page5bottomrighttextbtn.onmouseover=function()
		   {
		   			   page5bottomrighttextbtn.style.backgroundColor="#ffffff";
		   			   page5bottomrighttextbtn.style.color="#69B3B3";
		   }
		    page5bottomrighttextbtn.onmouseout=function()
		   {
		   			   page5bottomrighttextbtn.style.backgroundColor="#69B3B3";
		   			   page5bottomrighttextbtn.style.color="#ffffff";
		   }
		   var page6middletextleft0=document.getElementsByClassName("page6middletextleft")[0];
		   page6middletextleft0.onmouseover=function()
		   {   
		   			page6middletextleft0.style.textDecoration="underline";
			} 
			page6middletextleft0.onmouseout=function()
		   {    
		   			   page6middletextleft0.style.textDecoration="none";
			}
			 var page6middletextleft1=document.getElementsByClassName("page6middletextleft")[1];
			page6middletextleft1.onmouseover=function()
			{   
				page6middletextleft1.style.textDecoration="underline";
			} 
			page6middletextleft1.onmouseout=function()
			{    
			    page6middletextleft1.style.textDecoration="none";
			}
			 var page6middletextleft2=document.getElementsByClassName("page6middletextleft")[2];
			page6middletextleft2.onmouseover=function()
			{   
				page6middletextleft2.style.textDecoration="underline";
			} 
			page6middletextleft2.onmouseout=function()
			{    
			    page6middletextleft2.style.textDecoration="none";
			}
			 var page6middletextleft3=document.getElementsByClassName("page6middletextleft")[3];
			page6middletextleft3.onmouseover=function()
			{   
				page6middletextleft3.style.textDecoration="underline";
			} 
			page6middletextleft3.onmouseout=function()
			{    
			    page6middletextleft3.style.textDecoration="none";
			}
			 var page6middletextleft4=document.getElementsByClassName("page6middletextleft")[4];
			page6middletextleft4.onmouseover=function()
			{   
				page6middletextleft4.style.textDecoration="underline";
			} 
			page6middletextleft4.onmouseout=function()
			{    
			    page6middletextleft4.style.textDecoration="none";
			}
			 var page6middletextleft5=document.getElementsByClassName("page6middletextleft")[5];
			page6middletextleft5.onmouseover=function()
			{   
				page6middletextleft5.style.textDecoration="underline";
			} 
			page6middletextleft5.onmouseout=function()
			{    
			    page6middletextleft5.style.textDecoration="none";
			}
			 var page6middletextleft6=document.getElementsByClassName("page6middletextleft")[6];
			page6middletextleft6.onmouseover=function()
			{   
				page6middletextleft6.style.textDecoration="underline";
			} 
			page6middletextleft6.onmouseout=function()
			{    
			    page6middletextleft6.style.textDecoration="none";
			}
			 var page6middletextleft7=document.getElementsByClassName("page6middletextleft")[7];
			page6middletextleft7.onmouseover=function()
			{   
				page6middletextleft7.style.textDecoration="underline";
			} 
			page6middletextleft7.onmouseout=function()
			{    
			    page6middletextleft7.style.textDecoration="none";
			}
			 var page6middletextleft8=document.getElementsByClassName("page6middletextleft")[8];
			page6middletextleft8.onmouseover=function()
			{   
				page6middletextleft8.style.textDecoration="underline";
			} 
			page6middletextleft8.onmouseout=function()
			{    
			    page6middletextleft8.style.textDecoration="none";
			}
			 var page6middletextleft9=document.getElementsByClassName("page6middletextleft")[9];
			page6middletextleft9.onmouseover=function()
			{   
				page6middletextleft9.style.textDecoration="underline";
			} 
			page6middletextleft9.onmouseout=function()
			{    
			    page6middletextleft9.style.textDecoration="none";
			}
			
			//第四页
			/*var ul=document.getElementsByClassName("ul")[0];
			var li= ul.children;
			for (var i = 0; i < li.length; i++) {
			    li[i].style.backgroundImage =  i ;
			    li[i].onmouseover = function () {
			        for (var i = 0; i < li.length; i++) {
			            animate(li[i], { "width": 250 });
			        }
			        animate(this, { "width": 400 });
			    };
			    li[i].onmouseout = function () {
			        for (var i = 0; i < li.length; i++) {
			            animate(li[i], { "width": 300 });
			        }
			    };
			}*/
			
			
			var second=document.getElementsByClassName("second")[0];
			var hide2text=document.getElementsByClassName("hide2text")[0];
			var hide21=document.getElementsByClassName("hide21")[0];
			var hide22=document.getElementsByClassName("hide22")[0];
			var hide23=document.getElementsByClassName("hide23")[0];//242
			var hide24=document.getElementsByClassName("hide24")[0];
			hide2text.onmouseover=second.onmouseover=function()
			{
				startMove11(10,100);
				onchange1();
			}
			hide2text.onmouseout=second.onmouseout=function()
			{
					startMove11(-10,0);
					onchange2();
			}
			function onchange1()
			{
				var logo=document.getElementsByClassName("logo")[0];
				    logo.style.backgroundColor="rgba(243,158,56)";
				var second2=document.getElementsByClassName("second2")[0];
				    second2.style.color="rgba(243,158,56)";
			}
			function onchange2()
			{
				var logo=document.getElementsByClassName("logo")[0];
					logo.style.backgroundColor="#008B42";  
				var second2=document.getElementsByClassName("second2")[0];
				    second2.style.color="grey";	
			}
			hide21.onmouseover=function()
			{
				onchange211();
			}
			hide21.onmouseout=function()
			{
					onchange212();
			}
			function onchange211()
			{
				var hide21=document.getElementsByClassName("hide21")[0];
				hide21.style.backgroundColor="rgba(243,158,120)";/*"E9B477";*/
					
			}
			function onchange212()
			{
				var hide21=document.getElementsByClassName("hide21")[0];
					hide21.style.backgroundColor="rgba(243,158,56)";
			}
			hide22.onmouseover=function()
			{
				onchange221();
			}
			hide22.onmouseout=function()
			{
					onchange222();
			}
			function onchange221()
			{
				var hide22=document.getElementsByClassName("hide22")[0];
				hide22.style.backgroundColor="rgba(243,158,120)";/*"E9B477";*/
					
			}
			function onchange222()
			{
				var hide22=document.getElementsByClassName("hide22")[0];
					hide22.style.backgroundColor="rgba(243,158,56)";
			}
			hide23.onmouseover=function()
			{
				onchange231();
			}
			hide23.onmouseout=function()
			{
					onchange232();
			}
			function onchange231()
			{
				var hide23=document.getElementsByClassName("hide23")[0];
				hide23.style.backgroundColor="rgba(243,158,120)";/*"E9B477";*/
					
			}
			function onchange232()
			{
				var hide23=document.getElementsByClassName("hide23")[0];
					hide23.style.backgroundColor="rgba(243,158,56)";
			}
			hide24.onmouseover=function()
			{
				onchange241();
			}
			hide24.onmouseout=function()
			{
					onchange242();
			}
			function onchange241()
			{
				var hide24=document.getElementsByClassName("hide24")[0];
				hide24.style.backgroundColor="rgba(243,158,120)";/*"E9B477";*/
					
			}
			function onchange242()
			{
				var hide24=document.getElementsByClassName("hide24")[0];
					hide24.style.backgroundColor="rgba(243,158,56)";
			}
			
			
			
			
			var third=document.getElementsByClassName("third")[0];
			var hide3text=document.getElementsByClassName("hide3text")[0];
			var hide31=document.getElementsByClassName("hide31")[0];
			var hide32=document.getElementsByClassName("hide32")[0];
			hide3text.onmouseover=third.onmouseover=function()
			{
				startMove12(10,100);
				onchange3();
			}
			hide3text.onmouseout=third.onmouseout=function()
			{
					startMove12(-10,0);
					onchange4();
			}
			function onchange3()
			{
				var logo=document.getElementsByClassName("logo")[0];
				    logo.style.backgroundColor="#DB766C";
				var third2=document.getElementsByClassName("third2")[0];
					    third2.style.color="#DB766C";
			}
			function onchange4()
			{
				var logo=document.getElementsByClassName("logo")[0];
					logo.style.backgroundColor="#008B42"; 
				var third2=document.getElementsByClassName("third2")[0];
					    third2.style.color="grey";
					
			}
			hide31.onmouseover=function()
			{
				onchange311();
			}
			hide31.onmouseout=function()
			{
					onchange312();
			}
			function onchange311()          
			{
				var hide31=document.getElementsByClassName("hide31")[0];
				    hide31.style.backgroundColor="#E49595";/*"E9B477";*/
			}
			function onchange312()
			{
				var hide31=document.getElementsByClassName("hide31")[0];
					hide31.style.backgroundColor="#DB766C";
			}
			hide32.onmouseover=function()
			{
				onchange321();
			}
			hide32.onmouseout=function()
			{
					onchange322();
			}
			function onchange321()
			{
				var hide32=document.getElementsByClassName("hide32")[0];
				    hide32.style.backgroundColor="#E49595";/*"E9B477";*/
			}
			function onchange322()
			{
				var hide32=document.getElementsByClassName("hide32")[0];
					hide32.style.backgroundColor="#DB766C";
			}
			
			
			var fourth=document.getElementsByClassName("fourth")[0];
			var hide4text=document.getElementsByClassName("hide4text")[0];
			var hide41=document.getElementsByClassName("hide41")[0];
			var hide42=document.getElementsByClassName("hide42")[0];
			var hide43=document.getElementsByClassName("hide43")[0];
			var hide44=document.getElementsByClassName("hide44")[0];
			hide4text.onmouseover=fourth.onmouseover=function()
			{
				startMove13(10,100);
				onchange5();
			}
			hide4text.onmouseout=fourth.onmouseout=function()
			{
					startMove13(-10,0);
					onchange6();
			}
			function onchange5()
			{
				var logo=document.getElementsByClassName("logo")[0];
				    logo.style.backgroundColor="#79B9D4";
				var fourth2=document.getElementsByClassName("fourth2")[0];
				    fourth2.style.color="#79B9D4";
				
			}
			function onchange6()
			{
				var logo=document.getElementsByClassName("logo")[0];
					logo.style.backgroundColor="#008B42";  
				var fourth2=document.getElementsByClassName("fourth2")[0];
				    fourth2.style.color="grey";
					
			}
			hide41.onmouseover=function()
			{
				onchange411();
			}
			hide41.onmouseout=function()
			{
					onchange412();
			}
			function onchange411()
			{
				var hide41=document.getElementsByClassName("hide41")[0];
				    hide41.style.backgroundColor="#91C6E3";/*"E9B477";*/
			}
			function onchange412()
			{
				var hide41=document.getElementsByClassName("hide41")[0];
					hide41.style.backgroundColor="#79B9D4";
			}
			hide42.onmouseover=function()        
			{
				onchange421();
			}
			hide42.onmouseout=function()
			{
					onchange422();
			}
			function onchange421()
			{
				var hide42=document.getElementsByClassName("hide42")[0];
				    hide42.style.backgroundColor="#91C6E3";/*"E9B477";*/
			}
			function onchange422()
			{
				var hide42=document.getElementsByClassName("hide42")[0];
					hide42.style.backgroundColor="#79B9D4";
			}
			hide43.onmouseover=function()
			{
				onchange431();
			}
			hide43.onmouseout=function()
			{
					onchange432();
			}
			function onchange431()
			{
				var hide43=document.getElementsByClassName("hide43")[0];
				    hide43.style.backgroundColor="#91C6E3";/*"E9B477";*/
			}
			function onchange432()
			{
				var hide43=document.getElementsByClassName("hide43")[0];
					hide43.style.backgroundColor="#79B9D4";
			}
			hide44.onmouseover=function()
			{
				onchange441();
			}
			hide44.onmouseout=function()
			{
					onchange442();
			}
			function onchange441()
			{
				var hide44=document.getElementsByClassName("hide44")[0];
				    hide44.style.backgroundColor="#91C6E3";/*"E9B477";*/
			}
			function onchange442()
			{
				var hide44=document.getElementsByClassName("hide44")[0];
					hide44.style.backgroundColor="#79B9D4";
			}
			
			
			var fifth=document.getElementsByClassName("fifth")[0];
			var hide5text=document.getElementsByClassName("hide5text")[0];
			var hide51=document.getElementsByClassName("hide51")[0];
			var hide52=document.getElementsByClassName("hide52")[0];
			hide5text.onmouseover=fifth.onmouseover=function()
			{
				startMove14(10,100);
				onchange7();
			}
			hide5text.onmouseout=fifth.onmouseout=function()
			{
					startMove14(-10,0);
					onchange8();
			}
			hide51.onmouseover=function()
			{
				onchange511();
			}
			hide51.onmouseout=function()
			{
					onchange512();
			}
			function onchange7()
			{
				var fifth2=document.getElementsByClassName("fifth2")[0];
				    fifth2.style.color="#008B42";
			}
			function onchange8()
			{
				var fifth2=document.getElementsByClassName("fifth2")[0];
				    fifth2.style.color="grey";
			}
			function onchange511()
			{
				var hide51=document.getElementsByClassName("hide51")[0];
				    hide51.style.backgroundColor="#5cb172";/*"E9B477";*/
			}
			function onchange512()
			{
				var hide51=document.getElementsByClassName("hide51")[0];
					hide51.style.backgroundColor="#008B42";
			}
			hide52.onmouseover=function()
			{
				onchange521();
			}
			hide52.onmouseout=function()
			{
					onchange522();
			}
			function onchange521()
			{
				var hide52=document.getElementsByClassName("hide52")[0];
				    hide52.style.backgroundColor="#5DB172";/*"E9B477";*/
			}
			function onchange522()
			{
				var hide52=document.getElementsByClassName("hide52")[0];
					hide52.style.backgroundColor="#008B42";
			}
	        
			
			var sixth=document.getElementsByClassName("sixth")[0];
			sixth.onmouseover=function()
			{
				onchange9();
			}
			sixth.onmouseout=function()
			{
					onchange10();
			}
			function onchange9()
			{
				var sixth2=document.getElementsByClassName("sixth2")[0];
				    sixth2.style.color="rgba(243,158,56)";
			}
			function onchange10()
			{
				var sixth2=document.getElementsByClassName("sixth2")[0];
				    sixth2.style.color="grey";
			}
			
			var first=document.getElementsByClassName("first")[0];
			first.onmouseover=function()
			{
				onchange11();
			}
			first.onmouseout=function()
			{
					onchange12();
			}
			function onchange11()
			{
				var first2=document.getElementsByClassName("first2")[0];
				    first2.style.color="#008B42";
			}
			function onchange12()
			{
				var first2=document.getElementsByClassName("first2")[0];
				    first2.style.color="grey";
			}
	
	/*var weixin=document.getElementsByClassName("weixin")[0];
	wei.onmouseover=function()
	{
		startMove1(100);//暗
		
	}
	 boxes.onmouseout=function()
	{
		startMove1(50);//亮
	}*/
	
	}//window		
	     
		 var timer=null;
		 function startMove11(speed,target)
		 {
		 	var hide2=document.getElementsByClassName("hide2")[0];
		 	
		 	clearInterval(timer);
		 	timer=setInterval(function(){
		 		if(hide2.offsetLeft==target)
		 		{
		 			clearInterval(timer);
		 		}
		 		else
		 		{
		 		    hide2.style.left=hide2.offsetLeft+speed+"px";
		 		}
		 	},10);
		 }
		 function startMove12(speed,target)
		 {
		 	var hide3=document.getElementsByClassName("hide3")[0];
		 	
		 	clearInterval(timer);
		 	timer=setInterval(function(){
		 		if(hide3.offsetLeft==target)
		 		{
		 			clearInterval(timer);
		 		}
		 		else
		 		{
		 		    hide3.style.left=hide3.offsetLeft+speed+"px";
		 		}
		 	},10);
		 }
		 function startMove13(speed,target)
		 {
		 	var hide4=document.getElementsByClassName("hide4")[0];
		 	clearInterval(timer);
		 	timer=setInterval(function(){
		 		if(hide4.offsetLeft==target)
		 		{
		 			clearInterval(timer);
		 		}
		 		else
		 		{
		 		    hide4.style.left=hide4.offsetLeft+speed+"px";
		 		}
		 	},10);
		 }
		 function startMove14(speed,target)
		 {
		 	var hide5=document.getElementsByClassName("hide5")[0];
		 	clearInterval(timer);
		 	timer=setInterval(function(){
		 		if(hide5.offsetLeft==target)
		 		{
		 			clearInterval(timer);
		 		}
		 		else
		 		{
		 		    hide5.style.left=hide5.offsetLeft+speed+"px";
		 		}
		 	},10);
		 }
		 
		 
		 /* function animate(tag, obj, fn) {
		     clearInterval(tag.timer);
		     tag.timer = setInterval(function () {
		         // 假设当前这一次定时器代码执行可以清除（每个样式都到达了指定位置）
		         var flag = true;
		         // 先遍历obj
		         for (var k in obj) {
		                 var target = obj[k];
		                 var leader = parseInt(getStyle(tag, k)) || 0;
		                 var step = (target - leader) / 10;
		                 step = step > 0 ? Math.ceil(step) : Math.floor(step);
		                 leader = leader + step;
		                 tag.style[k] = leader + "px";
		             };
		             if (leader != target) {
		                 flag = false;
		             }
		         };
		         if (flag) {
		             clearInterval(tag.timer);
		             fn && fn();
		         }
		  
		     }, 20);
		  
		 }
		  
		 function getStyle(tag, attr) {
		     if (tag.currentStyle) {
		         return tag.currentStyle[attr];
		     } else {
		         return getComputedStyle(tag, null)[attr];
		     }
		 }*/
	    
		
		
		var alpha=50;
		var timer=null;
		
		//改变第二个页面的背景图片透明度
		function startMove1(target)
		{
			var background2=document.getElementsByClassName("background2")[0];
			clearInterval(timer);
		timer=setInterval(function(){
				var speed=0;
				
				if(alpha<target)
				{
					speed=10;
				}
				else
				{
					speed=-10;
				}
				if(alpha==target)
				{
					clearInterval(timer);
				}
				else
				{
					alpha+=speed;
					background2.style.filter='alpha(opacity:'+alpha+')';
					background2.style.opacity=alpha/100;
				}
			},30)
		}
		function startMove100(target)
		{
			var background2=document.getElementsByClassName("background2")[0];
			clearInterval(timer);
		timer=setInterval(function(){
				var speed=0;
				
				if(alpha<target)
				{
					speed=10;
				}
				else
				{
					speed=-10;
				}
				if(alpha==target)
				{
					clearInterval(timer);
				}
				else
				{
					alpha+=speed;
					background2.style.filter='alpha(opacity:'+alpha+')';
					background2.style.opacity=alpha/100;
				}
			},30)
		}
	    //改变第二页的图片的宽
		function startMove(obj,json,fn)
		{
			var attr=' ';
		  for(attr in json)
		  {
			  obj.style[attr]=json[attr];
		  }
			
			clearInterval(obj.timer);
			obj.timer=setInterval(function()
			{
				
			    for(var attr in json)
				{	
				    var speed=0;
				    var now=parseInt(getComputedStyle(obj,attr));
					    speed=(json[attr]-now)/8;
				    if(now==json[attr])
				    {
					    clearInterval(obj.timer);
						if(fn)
						{
							fn();
						}
				    }
				    else
				    {
					    obj.style[attr]=now+speed+'px';
				    }
				}
			},30)
		}




