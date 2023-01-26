class TicTacToe
{
    constructor(ai_symbol,player,first,second)
    {
        document.getElementById("tictactoe").innerHTML=`
            <table>
                <h1 class="h1">Tic Tac Toe</h1><br>
                <h1 class="h2">A simple game using AI. Trust me!! it doesn't let you win.</h1><br>
                <h1 id="victory_message_ttt" class="h2">&nbsp;</h1>

                <tr>
                    <td><div id="index-00" onclick="game.plot(0,0);game.Ai_return()"></div></td>
                    <td><div id="index-01" onclick="game.plot(0,1);game.Ai_return()"></div></td>
                    <td><div id="index-02" onclick="game.plot(0,2);game.Ai_return()"></div></td>
                </tr>
                <tr>
                    <td><div id="index-10" onclick="game.plot(1,0);game.Ai_return()"></div></td>
                    <td><div id="index-11" onclick="game.plot(1,1);game.Ai_return()"></div></td>
                    <td><div id="index-12" onclick="game.plot(1,2);game.Ai_return()"></div></td>
                </tr>
                <tr>
                    <td><div id="index-20" onclick="game.plot(2,0);game.Ai_return()"></div></td>
                    <td><div id="index-21" onclick="game.plot(2,1);game.Ai_return()"></div></td>
                    <td><div id="index-22" onclick="game.plot(2,2);game.Ai_return()"></div></td>
                </tr>
                <tr>
                    <td><button class="h2 pad-ex-small" onclick="game = new TicTacToe('`+ai_symbol+"','"+player+"',"+second+","+first+`);">First=`+second+` </button></td>
                    <td><button class="h2 pad-ex-small" onclick="game = new TicTacToe('`+player+"','"+ai_symbol+"',"+first+","+second+`);">You:`+player+`</button></td>
                    <td><button class="h2 pad-ex-small" onclick="game = new TicTacToe('`+ai_symbol+"','"+player+"',"+first+","+second+`);">Reset</button></td>
                </tr>
            </table>
        `
        this.grid = [["v","v","v"],["v","v","v"],["v","v","v"]];
        this.me_plot = first
        this.ai_symbol=ai_symbol
        this.player=player 

        if(this.me_plot)
        {
            var random_x = Math.floor(Math.random()*3)
            var random_y = Math.floor(Math.random()*3)
            this.plot(random_x,random_y)
            this.me_plot = false
        }
    }

    plot(i,j)
    {   
        
        if(this.winner()!=undefined){return undefined}

        if(this.me_plot && this.grid[i][j]=="v")
        {
            this.me_plot = false;
            this.grid[i][j]=this.ai_symbol; 
            document.getElementById("index-"+i+""+j).innerHTML=this.ai_symbol

        }
        else if (this.grid[i][j]=="v")
        {
            this.me_plot = true;
            this.grid[i][j]=this.player;
            document.getElementById("index-"+i+""+j).innerHTML=this.player
        }

        this.winner()
        
        
    }

    winner(grid=this.grid,edit=true)
    {
        
        for(var i=0;i<3;i++)
        {
            if(grid[i][0]==grid[i][1] && grid[i][2]==grid[i][1]&&grid[i][0]!="v")
            {
                for(var j=0;j<3;j++)
                {
                    if(edit)
                    {
                        document.getElementById("index-"+i+""+j).style.background="red"
                    }
                    
                }  
                if(edit)
                {
                    if(this.ai_symbol==grid[i][0])
                    {
                        document.getElementById("victory_message_ttt").innerHTML="AI is the winner"
                    }
                    else
                    {
                        document.getElementById("victory_message_ttt").innerHTML="Player is the winner"
                    }
                }
                return grid[i][0]
            }
        }
        

        for(var i=0;i<3;i++)
        {
            if(grid[0][i]==grid[1][i] && grid[2][i]==grid[1][i] &&grid[0][i]!="v")
            {
                for(var j=0;j<3;j++)
                {
                    if(edit)
                    {
                        document.getElementById("index-"+j+""+i).style.background="red"
                    }
                }
                
                if(edit)
                {
                    if(this.ai_symbol==grid[0][i])
                    {
                        document.getElementById("victory_message_ttt").innerHTML="AI is the winner"
                    }
                    else
                    {
                        document.getElementById("victory_message_ttt").innerHTML="Player is the winner"
                    }
                } 
                return grid[0][i]
            }
        }

        if(grid[0][0]==grid[1][1] && grid[2][2]==grid[1][1] && grid[0][0]!="v")
        {

            if(edit)
            {
                document.getElementById("index-"+0+""+0).style.background="red"
                document.getElementById("index-"+1+""+1).style.background="red"
                document.getElementById("index-"+2+""+2).style.background="red"

                if(this.ai_symbol==grid[0][0])
                {
                    document.getElementById("victory_message_ttt").innerHTML="AI is the winner"
                }
                else
                {
                    document.getElementById("victory_message_ttt").innerHTML="Player is the winner"
                }
            }
            return grid[0][0]
        }

        if(grid[0][2]==grid[1][1] && grid[2][0]==grid[1][1] && grid[0][2]!="v")
        {
            if(edit)
            {
                document.getElementById("index-"+0+""+2).style.background="red"
                document.getElementById("index-"+1+""+1).style.background="red"
                document.getElementById("index-"+2+""+0).style.background="red"

                if(this.ai_symbol==grid[0][2])
                {
                    document.getElementById("victory_message_ttt").innerHTML="AI is the winner"
                }
                else
                {
                    document.getElementById("victory_message_ttt").innerHTML="Player is the winner"
                }
            }
            return grid[0][2]
        }

        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                if(grid[i][j]=="v"){return undefined}
            }
        }

        if(edit)
        {
            document.getElementById("victory_message_ttt").innerHTML="It's a draw!!"
        }
        return "D"
    } 
    
    Ai_return()
    {
        if(!this.me_plot){return undefined}
        var answers =[
            ["a","a","a"],
            ["a","a","a"],
            ["a","a","a"]
        ]
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                if(this.grid[i][j]=="v")
                {
                    var pseudogrid = JSON.parse(JSON.stringify(this.grid))
                    pseudogrid[i][j] = this.ai_symbol
                    answers[i][j] = Number.parseInt(this.min_max(pseudogrid,false))
                }
            }
        }

        var count_win=-1
        var count_draw=-1
        var count_loss=-1
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                if(answers[i][j]==1){count_win++}
                if(answers[i][j]==0){count_draw++}
                if(answers[i][j]==-1){count_loss++}
            }
        }

        if(count_win>-1)
        {
            var random_index=Math.floor(Math.random()*(count_win+1))
            for(var i=0;i<3;i++)
            {
                for(var j=0;j<3;j++)
                {
                    if(answers[i][j]==1 && count_win==random_index)
                    {
                        this.plot(i,j)
                        return undefined
                    }
                    else if (answers[i][j]==1)
                    {
                        count_win--
                    }
                }
            }
        }

        if(count_draw>-1)
        {
            var random_index1=Math.floor(Math.random()*(count_draw+1))
            for(var i=0;i<3;i++)
            {
                for(var j=0;j<3;j++)
                {
                    if(answers[i][j]==0 && count_draw==random_index1)
                    {
                        this.plot(i,j)
                        return undefined
                    }
                    else if (answers[i][j]==0)
                    {
                        count_draw--
                    }
                }
            }
        }

        if(count_loss>-1)
        {
            var random_index2=Math.floor(Math.random()*(count_loss+1))
            for(var i=0;i<3;i++)
            {
                for(var j=0;j<3;j++)
                {
                    if(answers[i][j]==-1 && count_loss==random_index2)
                    {
                        this.plot(i,j)
                        return undefined
                    }
                    else if(answers[i][j]==-1)
                    {
                        count_loss--
                    }
                }
            }
        }

    }

    min_max(grid=this.grid,max=true)
    {
        if(this.winner(grid,false)==this.ai_symbol){return 1}
        else if(this.winner(grid,false)==this.player){return -1}
        else if(this.winner(grid,false)=="D"){return 0}

        if(max)
        {
            var max_value = -2
            for(var i=0;i<3;i++)
            {
                for(var j=0;j<3;j++)
                {
                    if(grid[i][j]=="v")
                    {
                        var pseudo_grid = JSON.parse(JSON.stringify(grid))
                        pseudo_grid[i][j]=this.ai_symbol
                        max_value = Math.max(Number.parseInt(this.min_max(pseudo_grid,false)),max_value)
                    }
                }
            }
            return max_value
        }
        else
        {
            var min_value = 2
            for(var i=0;i<3;i++)
            {
                for(var j=0;j<3;j++)
                {
                    if(grid[i][j]=="v")
                    {
                        var pseudo_grid = JSON.parse(JSON.stringify(grid))
                        pseudo_grid[i][j]=this.player
                        min_value = Math.min(Number.parseInt(this.min_max(pseudo_grid,true)),min_value)
                    }
                }
            }
            return min_value
        }
    }

    

}

let game = new TicTacToe("X","O",true,false);
















