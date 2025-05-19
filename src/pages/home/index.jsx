import React from "react";

const Index = () => {
  return (
   <div className="min-h-screen -m-6">
  {/* Hero Section */}
  <div className="relative h-screen">
    <div className="absolute inset-0">
      <img
        src="/landingnews.svg"
        alt="landing"
        className="w-full h-full object-cover opacity-90"
      />
    </div>

    {/* Logo Unila */}
    <img
      src="/logounila.svg"
      alt="Logo Unila"
      className="absolute top-5 right-5 w-16 h-auto z-10"
    />

    <div className="relative container mx-auto pt-56 px-10">
      <h1
  className="text-[84px] font-bold text-[#2E3192]"
  style={{
    WebkitTextStroke: '3px #E5E5EF', // ketebalan stroke dan warnanya
  }}
>
  WELCOME TO <br />THE U-TEWS WEBSITE
</h1>
    </div>
  </div>



      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="bg-[#2E3192] rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              The History of PUMMA and Buoy Development
            </h3>
            <div className="space-y-6 text-white">
              <p>
                On December 22, 2018, a massive tsunami struck the Sunda Strait
                region, located between the islands of Java and Sumatra. This
                tsunami was triggered by the collapse of a significant portion
                of the western flank of Mount Anak Krakatau, which caused the
                island to lose more than 50% of its mass. The collapse was the
                result of a long-term destabilization process that ultimately
                led to a massive landslide and triggered the tsunami. The
                tsunami waves hit the coastal areas of Banten and Lampung with
                wave heights reaching up to 13 meters. Around Mount Anak
                Krakatau, the waves even reached up to 80 meters. This tragic
                event resulted in 437 fatalities, 14,059 people injured, and
                more than 33,719 people displaced. Additionally, the volcanic
                eruption that followed the landslide spewed volcanic material,
                further worsening the conditions in the area.
              </p>
              <p>
                The Sunda Strait tsunami became one of the deadliest natural
                disasters in Indonesia in 2018. Its devastating impact not only
                directly affected local communities but also raised awareness
                among many parties about the importance of having an effective
                early warning system. At the time of the disaster, most
                residents did not receive timely warnings to evacuate. This was
                due to the lack of detection technology capable of providing
                fast and accurate alerts.
              </p>
              <p>
                Arising from this incident, a team of lecturers from the
                University of Lampung, led by Dr. Ing. Ardian Ulvan, S.T.,
                M.Sc., along with Melvi, S.T., M.T., Ph.D., Mona Arif Muda,
                S.T., M.T., and a team of students, conducted research to
                develop a more advanced and responsive early warning system. We
                created two main devices, PUMMA and Buoy, specifically designed
                to detect tsunamis by measuring sea level in real-time and to
                provide data to the Meteorology, Climatology, and Geophysics
                Agency (BMKG), the official authority for disaster mitigation in
                Indonesia. This innovation is expected to be a solution for
                mitigating future tsunami risks, giving communities sufficient
                time to evacuate and reducing potential material losses and
                casualties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
