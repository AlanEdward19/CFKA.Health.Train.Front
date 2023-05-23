import Muscle from "./IMuscle";

export default interface Exercise {

    id: number,
    name: string,
    muscleId: number,
    muscle: Muscle,
};