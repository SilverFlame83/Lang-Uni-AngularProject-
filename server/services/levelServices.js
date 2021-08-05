const Level = require('../models/Level');


async function createLevel(levelData) {
    const level = new Level(levelData);
    await level.save();

    return level;
}

async function getAllLevels() {
    const levels = await Level.find({}).lean();

    return levels;
}

async function getLevelById(id) {
    const level = await Level.findById(id).lean();

    return level;
}

async function editLevel(id, levelData) {
    const level = await Level.findById(id);

    level.language = levelData.language;
    level.imageUrl = levelData.imageUrl;
    level.text = levelData.text;
    level.starts = levelData.starts;
    level.durations = levelData.durations;
    level.sessions = levelData.sessions;

    return level.save()
}

module.exports = {
    createLevel,
    getAllLevels,
    getLevelById,
    editLevel
};