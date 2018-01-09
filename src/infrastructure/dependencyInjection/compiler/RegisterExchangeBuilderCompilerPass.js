/**
 * Compiler pass for the service container
 * It handles tags to register exchange builders
 */
export default class RegisterExchangeBuilderCompilerPass
{
    /**
     * Process the tags
     *
     * @param   {Container}     container   Service container
     */
    async process(container)
    {
        let definition = container.getDefinition("kryptopus_exchange_builder_registry");

        let serviceIds = container.findTaggedServiceIds("kryptopus.exchange_builder");
        for (let serviceId of serviceIds) {
            let exchangeReference = container.getReference(serviceId);
            let exchangeDefinition = container.getDefinition(serviceId);
            let tags = exchangeDefinition.getTags();

            for (let tag of tags) {
                if (tag.name !== "kryptopus.exchange_builder") {
                    continue;
                }

                if (!tag.builder_id) {
                    throw new Error(`Invalid tag "kryptopus.exchange_builder" for service ${serviceId}`);
                }

                let options = Object.assign({}, tag);
                delete options.name;
                delete options.builder_id;

                definition.addMethodCall("addBuilder", [
                    tag.builder_id,
                    exchangeReference,
                    options
                ]);
            }


        }
    }
}
