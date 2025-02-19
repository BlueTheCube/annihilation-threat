Events.on(ClientLoadEvent, () => {
    Pal.health = Color.valueOf("c74fff");
    
    Object.assign(Difficulty.casual, {
        enemyHealthMultiplier: 1.5,
        enemySpawnMultiplier: 2,
        waveTimeMultiplier: 0.6
    });
    
    Object.assign(Difficulty.easy, {
        enemyHealthMultiplier: 2,
        enemySpawnMultiplier: 2.5,
        waveTimeMultiplier: 0.6
    });
    
    Object.assign(Difficulty.normal, {
        enemyHealthMultiplier: 2.5,
        enemySpawnMultiplier: 2.8,
        waveTimeMultiplier: 0.6
    });
    
    Object.assign(Difficulty.hard, {
        enemyHealthMultiplier: 3.5,
        enemySpawnMultiplier: 3.5,
        waveTimeMultiplier: 0.6
    });
    
    Object.assign(Difficulty.eradication, {
        enemyHealthMultiplier: 5,
        enemySpawnMultiplier: 5,
        waveTimeMultiplier: 0.6
    });

    Object.assign(StatusEffects.boss, {
        damageMultiplier: 2.5,
        healthMultiplier: 2,
        damage: -0.1
    });
});

Events.on(WorldLoadEvent, () => {
    let enemyRules = Vars.state.rules.waveTeam.rules();
    enemyRules.unitDamageMultiplier = 2;
    enemyRules.blockDamageMultiplier = 2;
});
