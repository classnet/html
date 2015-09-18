
function startTime()
{
    var now=new Date();
    var h=now.getHours();
    var m=now.getMinutes();
    var s=now.getSeconds();
	
	var on="red";
	var off="white";
	
	am.style.backgroundColor=(h<12)?on:off;
	pm.style.backgroundColor=(h<12)?off:on;
	h=remain(h,12);
	
	h8.style.backgroundColor=(h<8)?off:on;	h=remain(h,8);
	h4.style.backgroundColor=(h<4)?off:on;	h=remain(h,4);
	h2.style.backgroundColor=(h<2)?off:on;	h=remain(h,2);
	h1.style.backgroundColor=(h<1)?off:on;
	
	m32.style.backgroundColor=(m<32)?off:on;m=remain(m,32);
	m16.style.backgroundColor=(m<16)?off:on;m=remain(m,16);
	m8.style.backgroundColor=(m<8)?off:on;	m=remain(m,8);
	m4.style.backgroundColor=(m<4)?off:on;	m=remain(m,4);
	m2.style.backgroundColor=(m<2)?off:on;	m=remain(m,2);
	m1.style.backgroundColor=(m<1)?off:on;

	
	
	s32.style.backgroundColor=(s<32)?off:on;s=remain(s,32);
	s16.style.backgroundColor=(s<16)?off:on;s=remain(s,16);
	s8.style.backgroundColor=(s<8)?off:on;	s=remain(s,8);
	s4.style.backgroundColor=(s<4)?off:on;	s=remain(s,4);
	s2.style.backgroundColor=(s<2)?off:on;	s=remain(s,2);
	s1.style.backgroundColor=(s<1)?off:on;	
	
    setTimeout('startTime()',1000);
}
function remain(value ,i)
{
	if(value>=i) value= value-i;
	return value;
}
