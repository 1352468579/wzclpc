
 function change(mBOx,element){
 var oBox = document.getElementById(mBOx);
		 var aDl = oBox.getElementsByTagName(element);
		 
		 for(var i=0; i<aDl.length; i++)
		 {
				 aDl[i].onmouseover = function()
				 {
					this.className='se';
					 
				}
				aDl[i].onmouseout = function()
				 {
					
					this.className='';
					 
				}
		}
}
change('student','dl')