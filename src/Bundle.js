/* @flow */
import type {BundleInterface} from "solfegejs-application/src/BundleInterface"
import type Container from "solfegejs-dependency-injection/src/ServiceContainer/Container"
import RegisterExchangeBuilderCompilerPass from "./infrastructure/dependencyInjection/compiler/RegisterExchangeBuilderCompilerPass"

/**
 * Exchange bundle
 */
export default class Bundle implements BundleInterface
{
    /**
     * Get bundle path
     *
     * @return  {String}        The bundle path
     */
    getPath():string
    {
        return __dirname;
    }

    /**
     * Configure service container
     *
     * @param   {Container}     container   Service container
     */
    configureContainer(container:Container)
    {
        container.addCompilerPass(new RegisterExchangeBuilderCompilerPass());
    }

}
