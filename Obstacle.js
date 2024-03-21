class C_Obstacle
    {
        constructor(l_Xaxis, l_Yaxis, l_Width, l_Height, l_color, l_Speed)
        {
            this.Xpos=l_Xaxis;
            this.Ypos=l_Yaxis;
            this.Width=l_Width;
            this.Height=l_Height;
            this.Color=l_color;
            this.Obstacle_Move_Speed=l_Speed
        }
       
        m_Obstacle_Movement()
        {
            this.Ypos+=this.Obstacle_Move_Speed;
        }
        m_Obstacle_Horizontal_Movement()
        {
            this.Xpos+=this.Obstacle_Move_Speed;
        }
        m_Obstacle_Collision(l_canvas)
        {
            if(this.Ypos<0)
                {
                    this.Obstacle_Move_Speed=-this.Obstacle_Move_Speed;
                    this.Ypos=0;
                }
            if((this.Ypos+this.Height)>l_canvas.height)
                {

                    this.Ypos=l_canvas.height-this.Height;
                    this.Obstacle_Move_Speed=-this.Obstacle_Move_Speed;
                }
        }
        
        m_Obstacle_Horizontal_Border_Collision()
        {
             if(this.Xpos<400)
                {
                    console.log(this.Xpos);
                    this.Obstacle_Move_Speed=-this.Obstacle_Move_Speed;
                    this.Xpos=400;
                }
            if((this.Xpos+this.Width)>1250)
                {
                    console.log(this.Xpos);
                    this.Xpos=1250-this.Width;
                    this.Obstacle_Move_Speed=-this.Obstacle_Move_Speed;
                }
        }
        m_Draw_Obstacle(l_context)
        {
            l_context.fillStyle=this.Color;
            l_context.fillRect(this.Xpos,this.Ypos,this.Width,this.Height);
        }
    }