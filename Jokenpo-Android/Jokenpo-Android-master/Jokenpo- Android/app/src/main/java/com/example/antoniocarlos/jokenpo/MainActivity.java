package com.example.antoniocarlos.jokenpo;

import android.media.Image;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private Button btn_pedra;
    private Button btn_papel;
    private Button btn_tesoura;
    //
    private ImageView img_jogador;
    private ImageView img_computador;
    //
    private TextView tv_jogador;
    private TextView tv_computador;
    //
    int placarJogador = 0;
    int placarComputador = 0;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.game_play);
        //
        btn_pedra = (Button) findViewById(R.id.btn_pedra);
        btn_papel = (Button) findViewById(R.id.btn_papel);
        btn_tesoura= (Button) findViewById(R.id.btn_tesoura);
        //
        img_jogador = (ImageView) findViewById(R.id.img_jogador);
        img_computador = (ImageView) findViewById(R.id.img_computador);
        //
        tv_jogador = (TextView) findViewById(R.id.tv_jogador);
        tv_computador = (TextView) findViewById(R.id.tv_computador);
        //
        btn_pedra.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            int escolhaComputador = (int) (Math.random()*3+1);
                if (escolhaComputador == 1){
                    //escolhemos a imagem do jogador como pedra
                    img_jogador.setImageResource(R.drawable.player);
                    // escolha do computador
                    img_computador.setImageResource(R.drawable.monster);
                    //Mensagem para o jogador
                    Toast.makeText(getBaseContext(),"EMPATE",Toast.LENGTH_SHORT).show();
                }else if (escolhaComputador ==2){
                    //escolhemos a imagem do jogador como pedra
                    img_jogador.setImageResource(R.drawable.player);
                    // escolha do computador
                    img_computador.setImageResource(R.drawable.monster);
                    //Mensagem para o jogador
                    Toast.makeText(getBaseContext(),"PERDEU",Toast.LENGTH_SHORT).show();
                    //Atualizar Placar
                    placarComputador++;
                    tv_computador.setText(String.valueOf(placarComputador));
                }else if (escolhaComputador ==3){
                    //escolhemos a imagem do jogador como pedra
                    img_jogador.setImageResource(R.drawable.player);
                    // escolha do computador
                    img_computador.setImageResource(R.drawable.monster);
                    //Mensagem para o jogador
                    Toast.makeText(getBaseContext(),"GANHOU",Toast.LENGTH_SHORT).show();
                    //Atualizar Placar
                    placarJogador++;
                    tv_jogador.setText(String.valueOf(placarJogador));


                }
            }
        });
        btn_papel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int escolhaComputador = (int) (Math.random()*3+1);
                if (escolhaComputador == 1){
                    //escolhemos a imagem do jogador como papel
                    img_jogador.setImageResource(R.drawable.player);
                    // escolha do computador
                    img_computador.setImageResource(R.drawable.monster);
                    //Mensagem para o jogador
                    Toast.makeText(getBaseContext(),"GANHOU",Toast.LENGTH_SHORT).show();
                    //Atualizar Placar
                    placarJogador++;
                    tv_jogador.setText(String.valueOf(placarJogador));

                }else if (escolhaComputador ==2){
                    //escolhemos a imagem do jogador como papel
                    img_jogador.setImageResource(R.drawable.player);
                    // escolha do computador
                    img_computador.setImageResource(R.drawable.monster);
                    //Mensagem para o jogador
                    Toast.makeText(getBaseContext(),"EMPATE",Toast.LENGTH_SHORT).show();


                }else if (escolhaComputador ==3){
                    //escolhemos a imagem do jogador como papel
                    img_jogador.setImageResource(R.drawable.player);
                    // escolha do computador
                    img_computador.setImageResource(R.drawable.monster);
                    //Mensagem para o jogador
                    Toast.makeText(getBaseContext(),"PERDEU",Toast.LENGTH_SHORT).show();
                    //Atualizar Placar
                    placarComputador++;
                    tv_computador.setText(String.valueOf(placarComputador));
                }
            }
        });
        btn_tesoura.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int escolhaComputador = (int) (Math.random()*3+1);
                if (escolhaComputador == 1){
                    //escolhemos a imagem do jogador como tesoura
                    img_jogador.setImageResource(R.drawable.player);
                    // escolha do computador
                    img_computador.setImageResource(R.drawable.monster);
                    //Mensagem para o jogador
                    Toast.makeText(getBaseContext(),"PERDEU",Toast.LENGTH_SHORT).show();
                    //Atualizar Placar
                    placarComputador++;
                    tv_computador.setText(String.valueOf(placarComputador));

                }else if (escolhaComputador ==2){
                    //escolhemos a imagem do jogador como tesoura
                    img_jogador.setImageResource(R.drawable.player);
                    // escolha do computador
                    img_computador.setImageResource(R.drawable.monster);
                    //Mensagem para o jogador
                    Toast.makeText(getBaseContext(),"GANHOU",Toast.LENGTH_SHORT).show();
                    //Atualizar Placar
                    placarJogador++;
                    tv_jogador.setText(String.valueOf(placarJogador));

                }else if (escolhaComputador ==3){
                    //escolhemos a imagem do jogador como tesoura
                    img_jogador.setImageResource(R.drawable.player);
                    // escolha do computador
                    img_computador.setImageResource(R.drawable.monster);
                    //Mensagem para o jogador
                    Toast.makeText(getBaseContext(),"EMPATE",Toast.LENGTH_SHORT).show();

                }
            }
        });
    }
}
