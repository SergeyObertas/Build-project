  const buildItem = document.querySelectorAll('.build') 
  const buildValue = document.getElementById('build-value')
  const stagesValue = document.getElementById('stages-value')
  const flatsVanue = document.getElementById('flats-value')
  const buildDescriprions = document.querySelector(".build-info_descriptions")

  const stages = document.querySelectorAll('.stage')
  const floor = document.getElementById("floor") 
  const amountFlatsSale = document.getElementById('amount_flats_sale')
  const bookingFlat = document.getElementById('booking_flats')
  const shareFlat = document.getElementById('share_flats')
  const soldFlat = document.getElementById('sold_flats')

  buildItem.forEach(item => {


    item.addEventListener('mouseover', function(){

      const dataBuildNumber = item.getAttribute("data-build-number");
      const dataStagesNumber = item.getAttribute("data-stages-number");
      const dataFlatsNumber = item.getAttribute("data-flats-number");
      const databuildDescriprions = item.getAttribute("data-build-descriptions");
      
      buildValue.innerHTML = dataBuildNumber;
      stagesValue.innerHTML = dataStagesNumber;
      flatsVanue.innerHTML = dataFlatsNumber;
      buildDescriprions.innerHTML = databuildDescriprions;
    } )

  })

  const buildLink = document.querySelectorAll("a")
  buildLink.forEach(link => {

    link.addEventListener('click', function(event){

      if (link.classList.contains('sold')) {
        event.preventDefault();
        
      } else{
        null
      }
    })
  })

  stages.forEach(stage => {
    stage.addEventListener('mouseover', () => {

      const floorNumber = stage.getAttribute("data-floors")
      const amountFlats = stage.getAttribute('data-flats-sale')
      const bookingFlats = stage.getAttribute('data-flats-booking')
      const shareFlats = stage.getAttribute('data-flats-share')
      const soldFlats = stage.getAttribute('data-flats-sold')
      
      floor.innerHTML = floorNumber;
      amountFlatsSale.innerHTML = amountFlats;
      bookingFlat.innerHTML = bookingFlats
      shareFlat.innerHTML = shareFlats
      soldFlat.innerHTML = soldFlats

    } )

  })