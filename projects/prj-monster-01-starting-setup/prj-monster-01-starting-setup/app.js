function getRandom(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

const app = Vue.createApp({
    data(){
        return{
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    computed:{
        mosterBarStyles(){
            return {width: this.monsterHealth + '%'}
        }, 
        palyerBarStypes(){
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        },
        gameIsOver(){
            return this.winner;
        }
    },
    watch:{
        playerHealth(value){
            if(value === 0 && this.monsterHealth === 0){
                this.winner = 'draw';
            }else if(value === 0){
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value === 0 && this.playerHealth === 0){
                this.winner = 'draw';
            }else if(value === 0){
                this.winner = 'player'
            }
        }
    },
    methods:{
        attackMonster(){
            this.currentRound++;
            const damage = getRandom(5,12);
            if(this.monsterHealth - damage < 0){
                this.monsterHealth = 0;;
            }else{
                this.monsterHealth -= damage;
            }
            this.addLogMessage('player', 'attack', damage);
            this.attackPlayer();
        }, 
        attackPlayer(){
            const damage = getRandom(8,15);
            if(this.playerHealth - damage < 0){
                this.playerHealth = 0;;
            }else{
                this.playerHealth -= damage;
            }
            this.addLogMessage('monster', 'attack', damage);
        },
        specialAttack(){
            this.currentRound++;
            const damage = getRandom(10,25);
            if(this.monsterHealth - damage < 0){
                this.monsterHealth = 0;;
            }else{
                this.monsterHealth -= damage;
            }
            this.addLogMessage('player', 'attack', damage);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandom(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        restartGame(){
            this.currentRound = 0;
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.winner = null;
            this.logMessages = [];
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(subject, action, value){
            this.logMessages.unshift(
                {
                    actionBy: subject,
                    actionType: action,
                    actionValue: value
                }
            );
        }
    }
});

app.mount('#game');