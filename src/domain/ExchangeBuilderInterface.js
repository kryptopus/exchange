/* @flow */
import type {ExchangeInterface} from "./ExchangeInterface"

/**
 * Exchange builder
 */
export interface ExchangeBuilderInterface
{
    /**
     * Build a exchange instance
     *
     * @param   {any}               config      Exchange configuration
     * @return  {ExchangeInterface}             Exchange instance
     */
    build(config?:any):ExchangeInterface;
}
