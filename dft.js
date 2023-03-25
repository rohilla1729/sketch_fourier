function dft(x,y) {
     N = x.length;
     let Xre;
     let Xim;
     let X = [];
     for (let j = 0; j < N; j++) {
          let dft_real_part = 0;
          let dft_im_part = 0;

          for (let i = 0; i < N; i++) {

               

               const phi = (TWO_PI * j * i) / N;

               dft_real_part += (x[i] * cos(phi) + y[i]*sin(phi));
               dft_im_part += (-x[i] * sin(phi) + y[i]*cos(phi));
          }

          Xre = dft_real_part / N;
          Xim = dft_im_part / N;
          
          let freq = j;
          let amp = sqrt(Xre*Xre + Xim*Xim);
          let phase = atan2(Xim,Xre);

          X[j] = { Xre, Xim,freq,amp,phase };
     }
     return X
}