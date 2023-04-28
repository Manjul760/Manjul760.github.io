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




class BagChal 
{
    constructor(idName,objectName,size)
    {
        //just needed for declaration
        this.gameEnded = false
        this.unit = "vw"
        this.objectName=objectName
        this.idName=idName
        this.size=size

        //everything that makes this work
        this.S ={
            "lionsPos":[[0,0],[0,4],[4,0],[4,4]],
            "turn":"S",
            "selected":[-1,-1],
            "bakhraCount":20,
            "eatenCount":0,
            "board":[
                ["L","","","","L"],
                ["","","","",""],
                ["","","","",""],
                ["","","","",""],
                ["L","","","","L"]
            ]
        }

        //defining board bull sheet
        var str = `<table class="Board" style="margin:auto;text-align:center;">
        <h1 class="h1" style="text-align:center;">Lion and Sheep</h1><br>
        <h1 class="h2" style="text-align:center;">A classical doesnt have AI for now</h1><br>
        <h1 class="h2" id="`+this.idName+`message" style="text-align:center;" ></h1>
        `
        for(var i = 0;i<5;i++)
        {
            str+= "<tr>"
            for(var j = 0;j<5;j++)
            {
                str+=`<td 
                id="`+this.idName+i+""+j+`" 
                class="`+this.S.board[i][j]+`" 
                onclick="`+this.objectName+`.evaluate(`+i+`,`+j+`)"
                style=""></td>`
            }
            str+= "</tr>"
        }
        str+=`<caption><input type="button" class="h2 pad-ex-small" onclick='`+this.objectName+` = new BagChal("`+this.idName+`","`+this.objectName+`",`+this.size+`)' value="Reset"></caption></table>`

        //rendering bull sheet
        document.getElementById(this.idName).innerHTML = `
        <style>
            #bagChalBoard .L{background-image: url(media/lion.png);background-position: center;background-size: 100%;background-repeat: no-repeat;}
            #bagChalBoard .S{background-image: url(media/sheep.png);background-position: center;background-size: 100%;background-repeat: no-repeat;}
            #bagChalBoard .Board{background-image: url(media/board.png);background-position: center;background-size: 80%;background-repeat: no-repeat;}
            #bagChalBoard .selected{background-color: red;border-radius:50%;}
        </style>`+str+`<style id="`+this.idName+`style"></style>`


        //styling bull sheet
        if(window.innerWidth<window.innerHeight){ this.unit = "vw"}else{this.unit = "vh"}
        document.getElementById(this.idName+`style`).innerHTML = this.styleOfBoard()

        window.onresize = ()=>{
            var prevunit = this.unit
            if(window.innerWidth<window.innerHeight){ this.unit = "vw"}else{this.unit = "vh"}
            if(this.unit != prevunit){document.getElementById(this.idName+`style`).innerHTML = this.styleOfBoard()}  
        }

        //message display
        document.getElementById(this.idName+"message").innerHTML=this.messsage()
    }
    //only for the one that changes
    styleOfBoard(){return `#bagChalBoard td{width:`+this.size+this.unit+`;height: `+this.size+this.unit+`;margin:`+this.size+this.unit+`;cursor:pointer;} ` }
    evaluate(row,column)
    {
        if(this.gameEnded){return null}
        //code pe mat jao logic pe jao logic pe
        if(this.S.selected[0]==-1 && this.S.selected[1]==-1)//if nothing selected
        {
            if(this.S.turn =="S" && this.pieceIn(row,column)==""&&this.S.bakhraCount>0){this.putSheep(row,column)}
            else if(this.S.turn == this.pieceIn(row,column)){this.selectPosition(row,column)}
        }
        else//if something selected
        {
            if(this.pieceIn(row,column)==""&&[row,column]!=this.S.selected)
            {
                if( (Math.abs(this.S.selected[0] - row) == 1 && Math.abs(this.S.selected[1] - column) == 1)  )
                {
                    if((row+column)%2 == 0){this.makeMove(row,column);}
                }
                else if((Math.abs(this.S.selected[0] - row) == 0 && Math.abs(this.S.selected[1] - column) == 1)||(Math.abs(this.S.selected[0] - row) == 1 && Math.abs(this.S.selected[1] - column) == 0))
                {
                    this.makeMove(row,column)
                }
                else if(this.S.turn=="L" &&this.pieceIn((this.S.selected[0] + row)/2,(this.S.selected[1] + column)/2)=="S") 
                {
                    
                    if((Math.abs(this.S.selected[0] - row) == 2 && Math.abs(this.S.selected[1] - column) == 2) )
                    {
                        if((row+column)%2 == 0){this.lionEatSheep(row,column);}         
                    }
                    else if((Math.abs(this.S.selected[0] - row) == 0 && Math.abs(this.S.selected[1] - column) == 2)||(Math.abs(this.S.selected[0] - row) == 2 && Math.abs(this.S.selected[1] - column) == 0))
                    {
                        this.lionEatSheep(row,column)
                    }
                }
   
            }
            document.getElementById(this.idName+this.S.selected[0]+""+this.S.selected[1]).classList.remove("selected")
            this.S.selected=[-1,-1]

        }
        //message
        console.log(JSON.stringify(this.S.board))
        document.getElementById(this.idName+"message").innerHTML=this.messsage()
        
    }

    //helper functions very important DND or Program TNT
    updateLionPos(row,column)
    {
        var idx
        for(var i=0;i<4;i++)
        {
            if(this.S.selected[0]==this.S.lionsPos[i][0]&& this.S.lionsPos[i][1]==this.S.selected[1]){idx=i;break;}
        }
        this.S.lionsPos[idx]=[row,column]
    }
    makeMove(row,column)
    {
        if(this.S.turn=="L"){this.updateLionPos(row,column) }

        this.S.board[row][column] = this.S.board[this.S.selected[0]][this.S.selected[1]]
        this.S.board[this.S.selected[0]][this.S.selected[1]] = ""
        document.getElementById(this.idName+this.S.selected[0]+""+this.S.selected[1]).classList = ""
        document.getElementById(this.idName+row+""+column).classList.add(this.S.board[row][column])
        if(this.S.turn=="L"){this.S.turn="S"}else{this.S.turn="L"}
    }
    lionEatSheep(row,column)
    {
        this.updateLionPos(row,column)

        this.makeMove(row,column)
        this.S.board[(this.S.selected[0] + row)/2][(this.S.selected[1] + column)/2]=""
        document.getElementById(this.idName+((this.S.selected[0] + row)/2)+""+((this.S.selected[1] + column)/2)).classList=""
        this.S.turn="S"
        this.S.eatenCount++
    }
    putSheep(row,column)
    {
        this.S.board[row][column] = "S"
        document.getElementById(this.idName+row+""+column).classList.add("S")
        this.S.turn="L"
        this.S.bakhraCount--
    }
    selectPosition(row,column)
    {
        this.S.selected = [row,column]
        document.getElementById(this.idName+row+""+column).classList.add("selected")
    }
    messsage()
    {
        if(this.lionCantMove()){this.gameEnded=true;return "Winner is sheep";}
        if(this.eatenCount==0){this.gameEnded=true;return "Winner is Lion";}
        return `Turn: `+this.S.turn+`| Sheep Left: `+this.S.bakhraCount+`| Sheep Eaten: `+this.S.eatenCount
    }
    pieceIn(row,column){console.log("input in function "+row+" "+column);if((row>=0&&column>=0) && (row<=4&&column<=4) ){return this.S.board[row][column]}return "DK"}
    lionCantMove()
    {
        var places = [[1,0],[2,0],[0,1],[0,2],[1,1],[2,2]]
        console.log()
        console.log(JSON.stringify(this.S.lionsPos))
        var a,b,c,d
        for(var i=0;i<4;i++)
        {
            [a,b] = this.S.lionsPos[i]
            for(var j=0;j<6;j++)
            {
                [c,d] = places[j]
                console.log(((a+b)%2==0)+" "+((a+b)%2==1)+" ")
                if(((a+b)%2==0))
                {
                    console.log("first "+a+" "+b)
                    console.log(this.pieceIn(a-c,b-d)+" "+(a-c)+" "+(b-d))
                    if(this.pieceIn(a-c,b-d)==""){return false}

                    console.log(this.pieceIn(a+c,b-d)+" "+(a+c)+" "+(b-d))
                    if(this.pieceIn(a+c,b-d)==""){return false}

                    console.log(this.pieceIn(a-c,b+d)+" "+(a-c)+" "+(b+d))
                    if(this.pieceIn(a-c,b+d)==""){return false}

                    console.log(this.pieceIn(a+c,b+d)+" "+(a+c)+" "+(b+d))
                    if(this.pieceIn(a+c,b+d)==""){return false}
                }
                else if(((a+b)%2==1) && (c==0||d==0))
                {
                    console.log("second")
                    if(this.pieceIn(a-c,b-d)==""){return false}
                    if(this.pieceIn(a+c,b-d)==""){return false}
                    if(this.pieceIn(a-c,b+d)==""){return false}
                    if(this.pieceIn(a+c,b+d)==""){return false}
                }
            }   
        }
        return true
    }

}

var LionSheep = new BagChal("bagChalBoard","LionSheep",17)
let game = new TicTacToe("X","O",true,false);
















