
export const LINKS = {
    EMAIL: 'alexanderyang20@gmail.com',
    GITHUB: 'https://github.com/alextyang/',
    LINKEDIN: 'https://linkedin.com/in/alextyang',
    SPOTIFY: 'https://open.spotify.com/user/koopakondra',
};


import { projectInfo as AB } from "../(projects)/accountable-brands/project";
import { projectInfo as SR } from "../(projects)/sunrise/project";
import { projectInfo as AM } from "../(projects)/animal-worlds/project";
import { projectInfo as NA } from "../(projects)/name-the-age/project";
import { projectInfo as RF } from "../(projects)/refashion/project";

// Order for project page's next/prev buttons
export const projectOrder: string[] = [AB.path, SR.path, NA.path, AM.path, RF.path];