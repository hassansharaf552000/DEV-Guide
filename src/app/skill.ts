// skill.model.ts
export class Skill {
    constructor(
        public id: number,                     // Unique identifier for the skill
        public name: string,                   // Name of the skill
        public description?: string             // Optional description of the skill
    ) {}
}

