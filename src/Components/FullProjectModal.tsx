import { Anchor, Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text } from "@mantine/core";


const FullProjectModel = (props: any) => {
  const technologies = props.technologies || [];
  return (
    <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="70%" className=" font-mono" opened={props.opened} onClose={props.close} >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl  !rounded-tr-3xl ">
          <Modal.Title data-autofocus className="!text-4xl text-white flex gap-3 items-center !font-bold ">{props.title}{props.live === true && <Badge className="flex gap-1 items-center" size="lg" variant="outline" color="red" rightSection={<Indicator color="red" position="middle-end" size={10} processing></Indicator>} >live </Badge>}</Modal.Title>
          <Modal.CloseButton size="md" iconSize="30px" className="bg-bgColor !text-red-500" />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !pt-2  !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl  !rounded-br-3xl ">
          <Image className="!rounded-xl !shadow-[0_0_5px_0_#64ffda]"
            src={props.image}
            height={160}
            alt={props.image}
          />
          <Group mt="md" mb="xs">
            {technologies.map((tech: string, index: number) => (
              <Badge key={index} size="xl" variant="light" color="#64ffda">{tech} </Badge>
            ))}
          </Group>
          <Text className="!text-justify" size="lg" c="dimmed">
            {props.description}
          </Text>
          <Group justify="space-between" mt="md" mb="xs">

            <a href={props.github} target="_blank" className="w-[48%]"><Button variant="outline" size="lg" color="#64FFDA" fullWidth mt="md" radius="md">
              View Code
            </Button></a>

            <a href={props.link} target="_blank" className="w-[48%]"> <Button size="lg" color="#64FFDA" className="!text-bgColor" fullWidth mt="md" radius="md">
              View Live App
            </Button>
            </a>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
export default FullProjectModel;