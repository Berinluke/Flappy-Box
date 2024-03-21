class c_square
            {
                constructor(l_x,l_y,l_size,l_color,l_speed)
                    {
                        this.X=l_x;
                        this.Y=l_y;
                        this.size=l_size;
                        this.color=l_color;
                        this.movespeed=l_speed;
                        this.Stop_Game_Flag=0;
                        this.move_Up_flag=0;
                        this.move_Down_flag=0;
                        this.move_Right_flag=0;
                        
                    }
                m_drawSquare(l_context)
                    {
                        l_context.fillStyle=this.color;
                        l_context.fillRect(this.X,this.Y,this.size,this.size);
                    }
                m_Player_Movement()
                {
                     if(this.move_Up_flag==1)
                     {
                        this.Y-=this.movespeed;
                     }
                     if(this.move_Down_flag==1)
                     {
                        this.Y+=this.movespeed;
                     }
                    if(this.move_Right_flag==1)
                     {
                        this.X+=this.movespeed;
                     }
                    
                }
               
                m_Player_Border_collision(l_canvas)
                {
                    if(this.Y<0)
                        {
                            
                            this.Y=0;
                        }
                    if((this.Y+this.size)>l_canvas.height)
                        {

                            this.Y=l_canvas.height-this.size;
                            
                        }
                    if((this.X+this.size)>g_canvas.width)
                        {
                            this.X=l_canvas.width-this.size;
                            this.Stop_Game_Flag=1;
                        }       
                }
                
                
                m_Player_Obstacle_Collision(l_ob_X,l_ob_y,l_ob_w,l_ob_h)
                {
                     if(this.X <= (l_ob_X + l_ob_w) && (this.X + this.size) >= l_ob_X&& this.Y <= (l_ob_y + l_ob_h) && (this.Y + this.size) >= l_ob_y)
                        {
                            this.X=0;
                            this.Y=300;
                        }
                }
            }
        
        
    