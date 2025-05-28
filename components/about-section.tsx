import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-4">
              I am a passionate software developer with a strong foundation in web development 
              technologies and a drive for creating efficient, user-friendly applications.
            </p>
            <p className="mb-4">
              Currently pursuing my Bachelor of Computer Application at National College of Computer Studies, 
              I combine my academic knowledge with practical experience in real-world projects. I enjoy working 
              in collaborative, cross-functional teams, where I can contribute my skills and learn from others.
            </p>
            <p className="mb-6">
              My approach to development focuses on clean code, responsive design, and intuitive user experiences. 
              I'm continuously seeking opportunities to expand my programming knowledge and stay current with 
              emerging technologies.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Jochhen, Kathmandu, Nepal</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">BCA (2020 - Present)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">pranayashrestha50@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+977 9808756249</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
              <Image
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                alt="Developer coding"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}