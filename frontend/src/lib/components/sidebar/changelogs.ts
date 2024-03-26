export type Changelog = {
	label: string
	href: string
	date: string
}

const changelogs: Changelog[] = [
	{
		label: 'Custom Contextual Variables',
		href: 'https://www.windmill.dev/changelog/custom-contextual-variables',
		date: '2024-03-23'
	},
	{
		label: 'Large log disk and Distributed storage compaction',
		href: 'https://www.windmill.dev/changelog/log-disk-distributed-storage-compaction',
		date: '2024-03-23'
	},
	{
		label: 'Rename Workspace (Self-Host only)',
		href: 'https://www.windmill.dev/changelog/rename-workspace',
		date: '2024-03-22'
	},
	{
		label: 'Configurable Available Languages',
		href: 'https://www.windmill.dev/changelog/configurable-languages',
		date: '2024-03-13'
	},
	{
		label: 'Workflow as Code',
		href: 'https://www.windmill.dev/changelog/workflows_as_code',
		date: '2024-03-04'
	},
	{
		label: 'Pin Database in SQL Scripts',
		href: 'https://www.windmill.dev/changelog/pin-database',
		date: '2024-02-27'
	},
	{
		label: 'Custom Workspace Secret Encryption',
		href: 'https://www.windmill.dev/changelog/workspace-encryption',
		date: '2024-02-15'
	},
	{
		label: 'Flow & Metadata Copilot',
		href: 'https://www.windmill.dev/changelog/ai-copilot',
		date: '2024-02-15'
	},
	{
		label: 'Ag Charts',
		href: 'https://www.windmill.dev/changelog/ag-charts',
		date: '2024-01-24'
	},
	{
		label: 'Database Studio',
		href: 'https://www.windmill.dev/changelog/database-studio',
		date: '2024-01-24'
	},
	{
		label: 'Rich results render',
		href: 'https://www.windmill.dev/changelog/rich-render',
		date: '2024-01-23'
	}
]

export { changelogs }