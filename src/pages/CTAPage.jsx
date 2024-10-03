import React, { useState } from "react";

const CTAPage = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-black mb-2">CTA</h1>
        <p className="text-lg text-gray-500">
          Create Custom CTAs for your website
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            className={`text-lg py-4 px-1 border-b-2 font-medium ${
              activeTab === "ALL"
                ? "border-green-500 text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => handleTabChange("ALL")}
          >
            ALL
          </button>
          <button
            className={`text-lg py-4 px-1 border-b-2 font-medium ${
              activeTab === "PUBLISHED"
                ? "border-green-500 text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => handleTabChange("PUBLISHED")}
          >
            PUBLISHED
          </button>
          <button
            className={`text-lg py-4 px-1 border-b-2 font-medium ${
              activeTab === "UNPUBLISHED"
                ? "border-green-500 text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => handleTabChange("UNPUBLISHED")}
          >
            UNPUBLISHED
          </button>
        </nav>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-6 flex flex-col items-center justify-center">
        {activeTab === "ALL" && (
          <div className="text-center">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhASERMSEhUVERUVFhgQFBUVEBYWGBUXFxUVExMZHSogGholHRUYITEhJSkrLi4uFx8zODMtNyktLisBCgoKDg0OGxAQGzclICUtLS0tLSs2LS0tLS0tMi0tLS4tLS0xLS0tLy0tLS0vLS0tLS0tLS0tLTEtLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUGBwj/xABLEAABAgMDBwcIBgcHBQAAAAABAAIDBBESITEFBhNBUWGRFCJScZKh0QcWMlNigbHSFRdClKLBI1RygrLC4TNjc9PU4vAkNJOz8f/EABoBAQACAwEAAAAAAAAAAAAAAAABAgMEBQb/xAAzEQEAAgEBBAcIAQQDAAAAAAAAAQIDEQQSE1EFFCExQWGxFTJScZGh0fDBIiNygTNC8f/aAAwDAQACEQMRAD8A9xQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAgICAg5bOTO4S8QQYbA99KuLiQ1uxtBifh8OpsXR3HpOS06Q1c+08O27ENO/PiMQQYcO/YXg+4g1C3Y6JxROu9P2YOuW5Md+esUkNMNtALqRIwPvIdf71kjorHEa732r+Fet27tPVIZ7xoeEJhr0nxXcLTjRR7Jx377T9Ij0g65aPD1PrCj+qhfj8U9i4vin7HXr8j6wo/qoX4/FPYuL4p+x16/I+sKP6qF+PxT2Li+KfsdevyPrCj+qhfj8U9i4vin7HXr8j6wo/qoX4/FPYuL4p+x16/I+sKP6qF+PxT2Li+KfsdevyPrCj+qhfj8U9i4vin7HXr8j6wo/qoX4/FPYuL4p+x16/I+sKP6qF+PxT2Li+KfsdevyZWTfKCS9ojw2tYTQuYTVu8g4j/l6xZuhoiszjt28p8V6bd2/1R2O9XAdAQEBAQCgICAgICAEBAQQiPoEHk2esAumnhuL8K3Xl7qX8F6Po7+rY7R5z6RLmbT2Z4n5MWWyI9rQHyzHkA36ctJNXXkDcQP3d605pbwlni0cmFlHNyO54dDhNhjo6W13m9XrWdNJVmYW4+bEyR6Le2FMVk1Y3mtNdFvbCtuyjU81prot7YTdk1PNaa6Le2E3ZNTzWmui3thN2TU81prot7YTdk1PNaa6Le2E3ZNTzWmui3thN2TU81prot7YTdk1PNaa6Le2FG7JqyHtxBxvC9BWfFzph7XIzdqHCdTGG047Wgrw+Wu7e0cpl3qzrWJXuUbu9Y1lyHErVBNAQCgICAgICAEEIsUNFSgs8tZv4IIvm2HGvBB53nrQTUNwwqO4g/mvQ9DzrhvX97Yc7bOy9ZbaHDtBxq4WW2jYY+I43gUDGAuOOoalgy5YxRrMar1rvdixEc2mM37pCcJ4aFYY26kf9V+BPNvG5vPpQvafcfBVnbaa9y3Anmj5uP6bO9T16nJHAnmebj+mzvTr1ORwJ5oxM3ngE2mmgJ16lMbbSZ00JwTzaiLDDWse4xqOLqCDLR4/o2a2jChus4ilaVvpgsuXaq47bswpXFNo11VydL6V4Y10wCan9NJTUFl15rEiQg0cVjnb6fCtGC3NuPNx/TZ3qvXqck8CeZ5uP6bO9OvU5HAnmebj+mzvTr1ORwJ5sXKOSXQWhznNILqXV2E/ksuHaa5Z0iFL45rGrz2dbSJEHtu/iK9FjnWkfKHOt3y9Zzco6Vlj/AHLBwaB+S8dtsabRePOXZwTrjr8oZcybNnrv6lrMqbJpgwrwQS5azfwQXIMwHGgqgulAQEBAQEAIIRG1pUVv1oMPRDonu8EDRDou7vBB595SeY6G4D7QbfscWBdvoe+7vx/j66fy0dtrrp/ts4DiQSHNZRpeXPdZYGgWnFztQABNVbLNaRrbuRWJnuWhlSFrnZP7zD+ZYOsYf2F+HdSHlaXvHLZMkbJuFX+JRO0Yv2CKWRiZWlwb56THXNwh/MpjacX7Bw7I/TMt+vSX3uD8ynrOL9hHDsp9MS369Jfe4PzJ1nF+wcOwMrywwnpIdU3B+ZOs4p/8OHZX6Zlv16S+9wfmTrOL9g4dj6Zlv16S+9wfmTrOL9g4dj6Zlv16S+9wfmTrOL9g4dmZk17ZgubLzECOWgFwgzDIhaDgSGuNAo6zh/YTw7smbybFY20/AEfarjdgr48+O9tK96LY7RGsuEys2kaJ+1XiAfzXewTrjhz8nvS9MzJiWpKButt4RHAd1F5fpOum1X/16Q6uyzrihs537PWtBsKaIdF3d4IBhDonu8EGVLsAGFPigulAQEBAQEAILcU0p1/kUGLTcO1/VAs7m9r+qDgvKgz9Fa2OaduFT+S6nRc6Xt8tfpMNTa47I+f8SyclxnBsJza2rDaWcb26lu56xM2ie7VgxzOkTDZtmo59aOsFas4sPkzb9/NTlMeuMTgVPDw6d0G9cfMx9sTgUjHh5QTa6HKpjpReBU8LDyhG9c5VMdKLwKcLDyg3roHKEX1j+KtwMXwwjiW5n0jF9Y7inAxfDBxLcz6Ri+sdxTgYvhg4luZ9IxfWO4pwMXwwcS3M+kYvrH8U4GP4YOJbmhFnYjhZc9zhsJuVq4qVnWIRN7T3y4jOmaZCikvPpAUoKnAArp4c1aYo3vNq3pNrzo9D8nEwHyTS01AiPA99HfzLg9K6Tn3o8Yj8N/ZP+PSfCW/nfs9a5raLO5va/qgFu4dr+qDKgYavdeguFAQEBAQEAILUf7P7Q+BQY3Z4GiBUexwKDjPKRCtS0TqOGGofmt/o6f70xziY+zX2n3NfOGPm/MkQoEQYhoN+Fx/ouptFYta0T4/y1cc6REswS8PZF+9zn+cuf1OnP0bHGlspfLDoTGsY0WW3C26I922973Fx95SNipzk41l85wROizg7xUdSpzk49kPOOJ0YfB3irdRpzk49jzjidGHwd4p1GnOTj2amPEtOc43FziTTC81W3Wu7WI5MMzrOqCsgQEBAQcnnjINivZaqOYKEY4mv5Lcw4q5cek+EsGS81trDs/JYwMlosNuDY1b8ecxv5grk9L44pekRy/mfy3NjtvVtrzdXO/Z61yG4djgUA/u8CgyoGGr3YILhQEBAQEBACC1H+z+0PgUGNa3nshBW1vPZCDmc9YVqXi6+7Yf5Vu9HTptNP3viYYNpjXFLQ5ugCBDbqbVu+lV2tpru30jlDRxTrXtbcso51iHK2Q51kmZmA4tqbJcOTmhIpUVPWcVypvtXjHo293EOL6f2cp96mP8ATKN7aeXp+U6Y12SNXNEVku1lecYcxHe8Cl1lroDQdWsJNtp5en5IjG2Ohkum78fgp3tq5ehpi5mhkum78fgm9tXL0Rpi5sB8KAYrxWsOzzCS4c7m40Feks82zRjiYj+pTSm929yTJaX/AEdSzE6Sy6LQC+lirbzhWu/34eJtfL0X3cLBjQzadYhypaHGyXTUyHFteaXASxANKVFTTaVPE2vl6I3cX7qVieqk/vcz/pVG9tXL0/KdMa7KVL2iKyWayvOMOZmHvAp9lplwDfTWFG9tXL0/JpjbR8GToaPdWhp6eOrUpi2069sehMYubh85W3wzucOBHiu7sc9kw0M/fDf+TGJ/3Tf8I/xg/kud03HuT8/4bOwz70fL+XYzv2f2lwHQVtbz2QgoXb/whBlQDd/wILhQEBAQEBACChQYd9ft4Dr1oK3+2g0ec0O1AmMfROOPonxWxsk6Z6T5x6seaNcdvlLks3Hfonbnn4Bej2yP64+TmYfddMzI7gCdI7Ct0J7vsh1xDb7jq13Y3Lk222kTputyME811mR3VoXk30vhRKekW42cKg37KHAgmk7bXktwJ5rsHIDiAQ8UIBFWuab9rSKg7ik7bXkcCears3H9NvApG3V5HAnmp5tv6bOBU9eryRwJ5tdlGSMFwa4g1aDUYYkfktnDljJXWGO9N2dGnyhPGGWgAGorfgtzFii8TMywXvurUaeiNvLYZFac14PcDXVsVq4aW7pn6Im9oXXT5ssLQKur6Ro0UxvVYw/1TE+Cd/shHlUXowv/ACs+ZTw8fOfpP4N63l9WTKR7YNRQhxaaGoqNhGIWLJTdlattYa3OVvNhn2iOI/otnY57Zhiz90NZkLPSFk6M4RYcSIHsaDo7NW8640cRXXctHpnJWd3H4x2s+xRMa2eh5DzqlsoMtSznVY8B7HizFbX0SRUgg0NCCRcdYK4Mxo6ETq3t/tqEqOr7erHrQZUHDX78UEygICAgICAEFCgwrO4doIFncO0EGBlOHahxx7I+IVqW3bRPJFo1jR51kSeZDDxEJFSNROqhwXr9pxWyTE1cbFeKxpLasy3CqOeey7wWrOyZOXozRmrzX/peF0zwd4KnVsnJPFrzW3ZZhAjnm/2XeCtGy5Jju9EcWvNWLliF0z2XeCiuzZOXoTlrzWvpuF0z2XeCv1TJy9EcavNQ5Zg9M9l3gnVcnL0OLXmtxcpy7vSNetjvBWrgzV7vVE5KT3rfK5XYOw7wVuHtH7MI3sa47KUuRZJFNlh1PgqxgzROv8p4lNNFvlcrsHYd4K3D2j9mEb2Neh5VgNFGmg3Nd4Kk7PlmdZj7pjLSO5g5an4cRgDHVIeDgRdQjWN6z7NhvS2to8FMt62jsc7n7Ly7IUv6Yj6IFlkDRuaXVeYjiKml9AMLWxePvmzZdqyzbu3pj5adkaR6u7fFix4McV79In569s6/wn5HpeKZx0RjXaIQnMiOwZUlpY2ut1QDuFdqvbuYK973CzuHaCouFu4doIMqALtXuNe9BcKAgICAgIAQUKDC7PfRAu9nvQQgsDjEBoQRQ0wQaSbzKgxHF1oiuwfG+lfct/F0ltGKu7E9nm177NjtOsws+YUHpu4H5lk9r7T5fRXqeNc8yIXTdw/3KvtTaPL6J6pjRdmNBOL3cP8AcpjpXaI5fRHVMarsx4R+27h/uSOldojl9DqmNDzCg9N3A/Mp9r7T5fQ6niPMKD03cD8ye19p8vodTxHmFB6buB+ZPa+0+X0Op4jzCg9N3A/MntfafL6HU8R5hQem7gfmT2vtPl9DqeJrcp5ty0B8KG4xnOihxZYaKGxQuFS8CtDWiy06R2q9ZtrGkeXNS2zYomI0ntW/N6B0Jnss/wA1Paef46/SfwdVx8pa/K0CRgQy/wDTvIDiWBtl7bLi0h1p4Go4VqL8CFsY9o23JWbRNdI8WO+LDWYiYnVxWWcsy8ey3RRCxnoW3C20kC0A4H0SRhuCpGHBe05M1dbT3zHZE8uzs7fNa2TJuxSs9kd2vbMf75PSMxs5pKKyFJy0N0B0NtbLmBrXkUtvaQ51SSam0a9dFzNo2eaTNo7vRtY8kTGni7e72e9arKH93vQZUDAYe7BBcKAgICAgIAQUIQWeSN38Sgckbv4lBjwaNc46tW1Bf0w2oGmG1A0w2oGmG1A0w2oGmG1A0w2oGmG1A0w2oGmG1Bzee0wGQmRrBiCE4OAFQWvqAHV1C8gnZUa0x4s2XNWmO27E668vp4+XmvxMVMVpvXWY00/98PPyYsnPOmIdqHBi0IobMSCHNJF4veCDfsBW1l2acVt29oj6/hrUy78axHp+XB5zRuZMG8XFoDjadSoYAXVNTSl9SvQY8cYdlikcvvPf95c+95yZd6f3Rwi02Z1fkuhWsowfZZEceqwW/wAy19rn+1LLh9970JVu/iVyW2ryRu/iUF2GwNFB3mqCRQEBAQEBACAgICAgICAgICAghEdQfDaUEJZ1WgawB/8AUF5AQW48EPa5jsHNLT1EUKtW01tFo8ETGsaS80mGTGTozgxxAcCGupVj26jTpCvuO43+mpOHbccTaO77T+J/e1y538Fuxw2dUzRjYdbybR6hhX3/AAWTardkVVxR26tnmx5P3RmtizTnQmOFWw20EUjUXE+iDspW/UubbJp2Q2Yrq7vIWbctJxNLLsLYlgstOe9/NJBIsuJGLRfRYLzvxpZkrG72w6WUn3WgHXgmmABGzBa+TDXTWGSt517W1WozCAUBAQEBAQAgi80CDG5ZuPBA5ZuPBBXlfsu4IKcs3Hggcs3Hggcs3Hggm2ZqCaYcUEOWbjwQOWbjwQR5SK1o7hh1IKCOObc67dq2FBc5X7J4IHK/ZPBBLlN1aeKDGmzDitsRIdtuxza37RsKvjyXxzvUnSVbVi0aTDznLmQocTLEs1sMNhQ5NsUtpzSWRYoAO2rnMJrjQro4s1r45tadZ1/DWvSItERHZo7NVSILkA0c07HD4quT3ZWr3w2vLNx4LnthkQn1FUEygICAgICAEEYmBQa9BJgQSJQRcgigILjMCgtoCAEFSEEwg53OzPGWkLIjFz4jhVsOEAXkVpaJJAa2usm+hpWimI1RM6OFmvLFENRClIbRqMSK5x94a0U4qd1XeYjfK7Na4EserSD+ZN03nYZoZYfPNfNxITYRNILQ1xdVrCXOdUgUq55FPYW1gjSGO86y6FZlBBdlvSHv+Cx5vclenvM1aLOzZfBBdKAgICAgIKIIxMCgwrO8cUEm9Y4oKPIxJAGupFEiNe4YsKdhvfFYHNtQ3Na6pAvcBZodezruWW2C9a1tMdltdP8AX79FIyVmZiPBk2d44rEuWd44oJsFxwQQs7xxQLO8cUCzvHFADd44oJ3bRxCD5tzyyzyycmI4NWF1mHs0bOawjroXfvFZIY5nVHJea05MNL4MBzminOcWMaatDhZtkWrnC8K1aTPcrM6NjA8nuUHOAMJrAftPiw7I67JJ4BW4Vjeh67kHJbZWXgwGmohtoTSlpxJL3U1VcSfetmsaRooz1KBBkSjKmuzasGe0bujJjjt1ZlneOK1GZly+CC4gqgICAgICCETAoNeGDYEGNlfKEKWh6WKDYDmtJa2pFo0BI2LLhw2y23a96l7xSNZedZwZzujumYTQNE8tDKdGG484XV5/NJG4Lv7JsEY5ree+I1+sfw5+baJtrHh++rVRo8T0quBe4PJ2uBtA8b10tykxFdO7s/hrb1tZl1GR892jlDpoUBeXQw0VdSjWiG0fuk1JxJXCz9GTpXh/Kfy38e1R27zu7I2dy4zdXYY5pQWrI2BAsjYEAMGwIJiGNYHBBynlNyuJWQi2aCJG/QspcRaBtuHUwOPXRTCLT2PIMx83TPTTIRB0TaPjEaoYPo12uPNHvOpWmVIjVDLmeE2yYmxBmHwoTZmOGMh2QxrBFdZAFNgVovaI01JiJl7zkGUc2Wl2xyXxRBZpHOxL7ILzxqo4t+a25HJPLEOkvMFnNcIMQtIxDgwkHisuz3tbLWJnsmY9VMlYikzHJpswHxIsKM6O8xSIoALtQsg071u9J14N61r2djBss79ZmebpzAbsC5nEvzbW7AWDYOCpM6rFkbAgzpcc0ILqAgICAgICCMTAoMFgQcNnplKYZEiw3Q6wIjA0Bwq0kXiIx4Ao4GnNNb2713ujtnw2pW9Z/qidfP5THjHn5uftOS8Wmsx2S4xtLyNi7kad7Q7WTGnGua1oBHw2XKlI0stPbC1LODHh1lryHB1HVs1BqK01VpdrTJj36zXXvK23ZiXpOaM1MRYb3zAdzn1a51G1BFLLGACjRQX6y4rzHSOLDivFcU+HbH5nn6Ops172iZs6FmBXPbK3RAogrRBMkAX3daRGo8Z8r0WPHmWNEN2jgtLWhvOcXuNXPsjEEBgGsUvpVbcbNacfEpO9Hjp3x5TDBbJpbdtGnLXx+Tusx83xk6TNsDSuaYsY7CG1DAdjRd12jrWrM6s0RpDwjNSSM3OykJ1+ljtL9dWg6SL+FrlKsPqAqq7Gyk2sGMP7p/8ACVlwf8tfnHqpk92fk0Pk6H/Txf8AHP8A62Lp9Nf89f8AH+Zauw+5Pz/iHUbVx26jRAogzZfBBdQEBAQEBAQUKCxGgEnmusoNPnBm4ZpgaY72UrSzWwf22Vo7C7YtrZNq6vbe3Yn1/wBT4MObFxI010cy3M4sJZEjVoABYZTVrqSuxHSW9ETWrT6rpOkysQMz6Oq6KCPZZQ8SVkt0lEx2V+6sbNzlkQsxnRXf24axpBuh8/japXesOTpTcj3e35r12TWe92srk90NjWCK91kUrEJc873OOJXCvfftNtNNeXZDoVjSNF3kr+n3KiTkr+n3IHJX9PuQOSv6fcg4fO3NTKj9MZTKDnMeSdBEpDLa4thxgCQNgu61attFZrMtX5PZCcjxZqDlKG4iExlDMw6xC57jhFweKMN9+OKjF/ZycTHOk+S1r2yU4d+2HZZ5wYokZwQy5z3S8RjbDSSHPaWgmmAFak6qK+LHv23dYj5zpCt7bsa6fR5d5IM2IrJ8xIoDRDl4lg489xa246ua53FZc2zXx13pmJjymJY6ZImdNJj5xo9r5K/p9y1mZi5UgOEGOS+4Qohw9krLs8a5ax5x6qZPcn5Oe8nMMul4tHUpHOr2GLp9NR/fr/j/ADLV2H3J+f8AEOr5K/p9y47dOTO6fcglDl3Agl1RsogyAEFUBAQEBAQEBBS0EFLY2oNblVmDh1H8ls7Pb/qxZI8WvWyxNxItDWCuJvK0ctt6zYpGkMjSDesaxpRvQNKgaVA0qBpUDSoPMc68pZdj8yBImWa1zgXQ40CM6I29t1qgDSDWlmuF6t2bs1nxV1tExMeDdeS+LOiFMMn4b2PEYFhfDYy00sFaWQA6hbjvWOuOlI0pC9sl79t5dhMTjIbXPiEMa0VJcaADeslKWvaK1jWZVtaKxrLh86M9ocSG+DL1IeC1z3XCybiGtN94uqaLvbD0Vel4yZfDtiPPzc/PtlbVmtPq02aec3I3PDhbhvIJDSLTSPtNrcbtW4e/d2/YOsxExOloYNn2jhT29z0jJWW4EyCYMQOpS0KEPbXC009RvwuXmto2XLgnTJGno6mPNTJ7ss+2FrsitobQgIKoCAgICAgIIOZVBHRb0DRFBQwjuQR0G4dynWUaK6MqElg7ECwdiBYOxAsHYgpZOxAsnYgrYOxAsHYgWDsQDDOxBHQeyOAU6yjRXQbhwCayaKiDsACapV0RUCui3oJCGgmgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z" // Replace with actual image source
              alt="CTA"
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Create Your CTA</h2>
            <p className="text-gray-500 mb-4">
              Create Custom CTAs for Enhanced Engagement
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              + CREATE
            </button>
          </div>
        )}

        {activeTab === "PUBLISHED" && (
          <div className="text-center">
            <p className="text-lg">No Published CTAs available yet.</p>
          </div>
        )}

        {activeTab === "UNPUBLISHED" && (
          <div className="text-center">
            <p className="text-lg">No Unpublished CTAs available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CTAPage;
