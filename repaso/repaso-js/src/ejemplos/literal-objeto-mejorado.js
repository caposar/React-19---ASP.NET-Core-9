export default function LiteralesDeObjetosMejorado(){

    let apellido = 'Paredes';

    const paisProp = 'pais';
    const paisValor = 'AR';

    let persona = {
        nombre: 'Cesar',
        apellido,
        funcionNormal(){},
        funcionFlecha: () => {},
        [paisProp]: paisValor
    };

    const retornarValorPropiedadPersona = (prop) => persona[prop]; // Utilizando corchetes se accede dinámicamente a una propiedad de un objeto

    console.log(retornarValorPropiedadPersona('apellido'));

    console.log(persona);
}
