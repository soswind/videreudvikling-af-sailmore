import Accordion from "./Accordion"

export default function Economy() {
  return (
    <>
      <h1 className="info-h1">Få et overblik over udgifterne og vilkårene på sejltogter</h1>

      <div className="info-p">
      <p>Langturssejlads er en unik og rimeligt billig rejseform, som på ingen måde kan sammenlignes med pakkerejser eller charterferier. </p>
      <p>Man er i højere grad selv ansvarlig for at tilrettelægge rejsen, og og under sejladsen skal man være forberedt på uforudsete hændelser, da man som sømand er i naturens vold. </p>
      <p>Derfor har vi lavet en liste over økonomiske og sikkerhedsmæssige vilkår på en langturssejlads, så du bliver godt forberedt til dit sejlereventyr.</p>
      </div>

       
      <h2 className="info-h2">Helt overordnet om ansvarsfordelingen og sikkerheden på sejltogter</h2>
      
      <Accordion title="Ansvar" description={
      <ul>
        <li>SailMore er alene facilitator, og formidler kun salg af køjepladser mellem køber og leverandør – altså mellem dig og skipperen.</li>
        <li>Skipperen er vores samarbejdspartner, og det er skipperen – ikke SailMore – den leverer den sejlads, I har aftalt, og som du har købt.</li>
        <li>Du aftaler således alle detaljer direkte med skipper, og det er skipper, der er ansvarlig for, at aftalen overholdes.</li>
      </ul>}/>
      <Accordion title="Din sikkerhed" description={<ul>
        <li>At deltage i langturssejlads, i Danmark eller udlandet, sker på dit eget ansvar, og sejlads er forbundet med risiko for personskade.</li>
        <li>Du skal tegne dine egne forsikringer, før du sejler med på togter.</li>
        <li>Skipper vil naturligvis altid gøre sit allerbedste for at minimere risici.</li>
        <li>Skipper <em>skal</em> angive sine og bådens forsikringer i skipperprofilen.</li>
      </ul>}/>
      <Accordion title="Reklamationer" description={<ul>
        <li>Din tryghed er vigtig for os. Fortæl os derfor, hvis du har en dårlig oplevelse med en skipper. Så vil vi udelukke denne skipper fra SailMore.</li>
        <li>SailMore kan ikke refundere penge eller på anden måde kompensere dig for en dårlig oplevelse.</li>
        <li>Derfor skal du klage direkte til din skipper, som har det fulde ansvar for indhold og afholdelse af sejladsen.</li>
      </ul>}/>
    </>
  )
}