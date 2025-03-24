import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ frontMatter }: Props) {
  const { name, avatar } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            Hi, I’m Aashish Dhakal. 👋
            <br />
            <br />
            Product Minded Software Engineer and DevOps specialist. I focus on building scalable,
            cloud-native solutions—from microservices to CI/CD pipelines. With over 7 years of
            experience, I’ve helped teams boost performance and agility across startups and
            established companies. In my free time, I enjoy hiking, playing guitar, and watching the
            sunset.
          </div>
        </div>
      </div>
    </>
  )
}
