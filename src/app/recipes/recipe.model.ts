/**
 * Recipe Model Class
 */
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    /**
     * Constructor
     * @param name 
     * @param description 
     * @param imagePath 
     */
    public constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}