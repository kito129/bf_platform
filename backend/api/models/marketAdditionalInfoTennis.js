const mongoose = require('mongoose');

const MarketAdditionalInfoTennisSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    marketId: { type: String, required: true },
    marketType: { type: String, required: true },
    marketAdditionalInfo:{
        federation: { type: String, required: true },
        sex: { type: String, required: true },
        season: { type: Number, required: true },
        tennisTournament: { 
            location: { type: String, required: true },
            tournament: { type: String, required: true },
            series: { type: String, required: true },
            surface: { type: String, required: true },
            round: { type: String, required: true },
            bestOf: { type: Number, required: true },
         },
         tennisRank: { 
            winnerRank: { type: Number, required: true },
            loserRank: { type: Number, required: true },
            winnerPoint: { type: Number, required: true },
            loserPoint: { type: Number, required: true },
         },
         finalResult: { 
            winner: {
                s1: { type: Number},
                s2: { type: Number},
                s3: { type: Number},
                s4: { type: Number},
                s5: { type: Number},
                totalSet: { type: Number},
            },
            loser: {
                s1: { type: Number},
                s2: { type: Number},
                s3: { type: Number},
                s4: { type: Number},
                s5: { type: Number},
                totalSet: { type: Number},
            },
            bookOdds:{
                bet365: { 
                    winner: { type: Number},
                    loser: { type: Number},
                },
                pinnacle: { 
                    winner: { type: Number},
                    loser: { type: Number},
                },
                maxOddsPortal: { 
                    winner: { type: Number},
                    loser: { type: Number},
                },
                avgOddsPortal: { 
                    winner: { type: Number},
                    loser: { type: Number},
                },
            }
         }
    }
}
);

module.exports = mongoose.model('MarketAdditionalInfoTennis', MarketAdditionalInfoTennisSchema, 'marketAdditionalInfoTennis');


