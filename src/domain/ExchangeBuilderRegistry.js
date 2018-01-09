/* @flow */
import {bind} from "decko"
import type {ExchangeBuilderInterface} from "./ExchangeBuilderInterface"

/**
 * Exchange builder registry
 */
export default class ExchangeBuilderRegistry
{
    /**
     * Builders
     */
    builders:Map<string, ExchangeBuilderInterface>;

    /**
     * Constructor
     */
    constructor()
    {
        this.builders = new Map;
    }

    /**
     * Add a builder
     *
     * @param   {string}                    id          Builder identifier
     * @param   {ExchangeBuilderInterface}  builder     Builder instance
     * @param   {any}                       options     Options
     */
    @bind
    addBuilder(id:string, builder:ExchangeBuilderInterface, options?:any)
    {
        this.builders.set(id, builder);
    }

    /**
     * Get available builders
     *
     * @return  {Map}   Available builders
     */
    @bind
    getBuilders():Map<string, ExchangeBuilderInterface>
    {
        return this.builders;
    }
}
