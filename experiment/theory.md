### Theory

The circuit configuration of 3-phase controlled bridge rectifier is given in Fig. 1.

<center>
  <img src="images/th1.png" height="300px">
  
Fig. 1. Circuit configuration of 3-phase controlled bridge rectifier.

</center>
<br>
The principle of operation of the above circuit can easily be understood from the waveforms given in Fig. 2. The output voltage of a bridge rectifier exhibits a six-pulse waveform with ripple frequency equal to six times the input supply frequency. The thyristors are sequentially numbered (T<sub>1</sub>, T<sub>2</sub>, T<sub>3</sub>, T<sub>4</sub>, T<sub>5</sub> and T<sub>6</sub>) based on their conduction sequences, with each thyristor conducting for 120&#176; duration. The thyristor connected between the supply lines with the highest instantaneous line-to-line voltage will be forward biased and starts conducting on applying gate pulse to it.<br>
However when the firing angle is greater than 90 degree the output voltage will be –ve DC as shown in figure 3(d) and 3(e). In such case a negative DC voltage source 
on dc side is required [3] so that the direction of thyristor current remain same. Generally this type of action takes place in case of regenerative mode of the system.
<br>

<center>
  <img src="images/th2.png" height="700px">
  
<br>Fig. 2. Typical waveforms.

</center>
<br>
The output voltage and power delivered can be controlled by changing the firing angle as shown in Fig. 3.
<br><br>


<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>

<img src="images/th3.png">
<br><br>
(a) α = 30&#176;
<br><br>
</center>
</td>
<td style="width:50%">
  
<center>

<img src="images/th4.png">
<br><br>
(b) α = 60&#176;
<br><br>
</center> 
    </td>
  </tr>
</table>
<br>

<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>

<img src="images/th5.png">
<br><br>
(c) α = 90&#176;
<br><br>
</center>
</td>
<td style="width:50%">
  
<center>

<img src="images/th6.png">
<br><br>
(d) α = 120&#176;
<br><br>
</center> 
    </td>
  </tr>
</table>
<br>

<center>
  <img src="images/th7.png" height="700px">
<br><br>
(e) α = 150&#176;
<br><br>
Fig. 3. Typical waveforms with different firing angle.
</center>
<br>

<div style="float: left; width:100%;"><br>
Various mathematical expressions are derived below to quantify the performance of three-phase rectifier.
<br><br>
Average voltage appearing across load is defined by
<br><br>
</div>

<br>
<div style="float: left; width:50%;">
  <img src="images/th8.png" height="135px">
</div>
<div style="float: right; width:50%; text-align:center;"><br><br>
    ..(1)
</div>
<br>

<div style="float: left; width:100%;"><br>
Simplifying the above equation
<br><br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th9.png" height="80px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(2)

</div>
<br>

<div style="float: left; width:100%;"><br>
Average load current is given by
</div><br>

<div style="float: left; width:50%;">
  <img src="images/th10.png" height="80px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(3)

</div>
<br>

<div style="float: left; width:100%;"><br>
where,
<br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th11.png" height="50px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(4)

</div>
<br>

<div style="float: left; width:100%;"><br>
  Each thyristor conducts for 120&#176;. Hence, the average current through each thyristor can easily be obtained as
</div><br>

<div style="float: left; width:50%;">
  <img src="images/th12.png" height="90px">
      </div>
<div style="float: right; width:50%; text-align:center;"><br><br>
    ..(5)

</div>
<br>

<div style="float: left; width:100%;"><br>
On simplifying the above equation
</div><br>

<div style="float: left; width:50%;">
  <img src="images/th13.png" height="85px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(6)

</div>
<br>

<div style="float: left; width:100%;"><br>
Similarly, the RMS current through each thyristor can be given by
<br>
</div>


<div style="float: left; width:50%;">
  <img src="images/th14.png" height="105px">
      </div>
<div style="float: right; width:50%; text-align:center;"><br><br>
    ..(7)

</div>
<br>

<div style="float: left; width:100%;"><br>
On simplifying the above equation
<br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th15.png" height="75px">
      </div>
<div style="float: right; width:50%; text-align:center;"><br>
    ..(8)

</div>
<br>

<div style="float: left; width:100%;"><br>
The RMS source current can easily be obtained as
<br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th16.png" height="105px">
      </div>
<div style="float: right; width:50%; text-align:center;"><br><br>
    ..(9)

</div>
<br>

<div style="float: left; width:100%;"><br>
On simplifying the above equation
<br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th17.png" height="85px">
      </div>
<div style="float: right; width:50%; text-align:center;"><br>
    ..(10)

</div>
<br>

<div style="float: left; width:100%;"><br>
The RMS value of fundamental current is
<br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th18.png" height="85px">
      </div>
<div style="float: right; width:50%; text-align:center;"><br>
    ..(11)

</div>
<br>

<div style="float: left; width:100%;"><br>
The distortion factor (DF) in source current is given by
<br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th19.png" height="76px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(12)

</div>
<br>

<div style="float: left; width:100%;"><br>
However, the displacement factor (DPF) in source current is given by
<br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th20.png" height="36px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(13)

</div>
<br>

<div style="float: left; width:100%;"><br>
Hence the power factor is given by
<br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th21.png" height="36px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(14)

</div>
<br>

<div style="float: left; width:100%;"><br>
On substituting the values from eqns, (12) and (13)
<br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th22.png" height="76px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(15)

</div>
