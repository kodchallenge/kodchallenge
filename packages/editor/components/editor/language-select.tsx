import { CaretSortIcon, CheckIcon } from '@kod/icons'
import { RouterOutputs } from '@kod/server/trpc'
import { Button, Command, CommandGroup, CommandItem, Popover, PopoverContent, PopoverTrigger, cn } from '@kod/ui'
import React, { useState } from 'react'
import { KodStorage } from '@kod/lib/storage'
import { StorageKeys } from '../../constants'
type Props = {
    data: NonNullable<RouterOutputs["problem"]["getBySlug"]>["base_codes"][number]["language"][], // WTF? Why is this so complicated?
    selected: Props["data"][number],
    onSelect: (lang: Props["data"][number]) => void
}

const LanguageSelect = ({
    data: languages,
    selected: language,
    onSelect: setLanguage
}: Props) => {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    size={"sm"}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[125px] border-slate-300 dark:border-slate-600 justify-between"
                >
                    <span className="truncate">{language?.name}</span>
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandGroup>
                        {languages.map(lang => (
                            <CommandItem
                                key={lang.slug}
                                onSelect={() => {
                                    setLanguage(lang)
                                    setOpen(false)
                                    KodStorage.set(StorageKeys.CURRENT_LANGUAGE, lang)
                                }}
                            >
                                <CheckIcon
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        language?.slug === lang.slug ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {lang.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default LanguageSelect