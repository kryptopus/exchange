/* @flow */
import type {CommandInterface} from "solfegejs-cli/interface"
import type ExchangeBuilderRegistry from "../../domain/ExchangeBuilderRegistry"

/**
 * List available builders
 */
export default class ListBuildersCommand implements CommandInterface
{
    /**
     * Command description
     */
    description:string;

    /**
     * Builder registry
     */
    builderRegistry:ExchangeBuilderRegistry;

    /**
     * Constructor
     *
     * @param   {ExchangeBuilderRegistry}   builderRegistry     Builder registry
     */
    constructor(builderRegistry:ExchangeBuilderRegistry)
    {
        this.builderRegistry = builderRegistry;
    }

    /**
     * Get command name
     *
     * @return  {string}    Command name
     */
    getName():string
    {
        return "kryptopus:exchange_builder:list";
    }

    /**
     * Get command description
     *
     * @return  {string}    Command description
     */
    getDescription():string
    {
        return this.description;
    }

    /**
     * Configure the command
     */
    async configure()
    {
        this.description = "List available exchange builders";
    }

    /**
     * Execute the command
     *
     * @param   {Array}     parameters  Command parameters
     */
    async execute(parameters:Array<string>)
    {
        const builders = this.builderRegistry.getBuilders();

        console.info("Available exchange builders:");
        for (let [id:string, builder:ExchangeBuilderInterface] of builders) {
            console.info(id, builder);
        }
    }
}
